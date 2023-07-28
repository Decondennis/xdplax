<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\Models\User;

use App\Models\FxmintMemberDashboard;

use App\Models\Commission;

use App\Models\Subscription;

use App\Models\PrepaymentLog;

use App\Models\Metatrader;



class PaymentController extends Controller {

    public function commission(Request $request){

        $mt4_login = Metatrader::where('login', session('mt4-account'))->first();

        if(empty($mt4_login))
            abort(404);

       
        $due_commission = Commission::where('user_id', '=', Auth::user()->id )
        ->where('status', '=', 0)
        ->where('mt4_id', $mt4_login->id)
        ->sum('m_commission');

        $due_commission = $due_commission * intval(env('EXCHANGE_RATE'));

        $user = User::find(Auth::user()->id);
       
        return view('commission-payment', [
            'user'              => $user,
            'due_commission'    => $due_commission,
            'mt4_account'       => $mt4_login->login,
            'payload'           => json_encode(['status'=>'none', 'message'=>''])
        ]);
    }

    public function subscription(Request $request){

        $mt4_login = Metatrader::where('login', session('mt4-account'))->first();

        if(empty($mt4_login)) {
            
            abort(404);
        }

        $mt4_id = $mt4_login->id;



        $user = User::find(Auth::user()->id);

        $due_subscription = '0.00';

        $subscription_expiry = Subscription::where('user_id', '=', $user->id)
        //->where('status', '=', 0)
        ->where('mt4_id', '=', $mt4_id)
        ->latest()->first();

        if($subscription_expiry->status == 2)
            abort(404);

        $days_left = new FxmintMemberDashboard();
        $days_left = $days_left->get_date_range('now', $subscription_expiry->expiry );


        if( sizeof($days_left) < 4){

            $due_subscription = intval(env('SUBSCRIPTION_FEE'));

            $due_subscription = $due_subscription * intval(env('EXCHANGE_RATE'));
        }

        return view('subscription-payment', [
            'user' => $user,
            'due_subscription'  => $due_subscription,
            'mt4_account'       => $mt4_login->login,
            'payload'           => json_encode(['status'=>'none', 'message'=>''])
        ]);

    }

    public function log_payment(Request $request){

        $ref = $request->input('source').'-'.time().'-'.rand();

        $user = Auth::user();

        $mt4 = Metatrader::where( 'login', $request->input('mt4-account') )->first();

        if( empty($mt4) ) {
            abort(404);
        }

        $tbl = new PrepaymentLog();
            $tbl->user_id           =   $user->id;
            $tbl->mt4_id            =   $mt4->id;
            $tbl->amount_supplied   =   $request->input('amount');
            $tbl->reference         =   $ref;
            $tbl->description       =   '';
        $tbl->save();

        $data = [

            'status'		=>	'success',
            'message'		=>	'Request Logged successfully.',

            'data'			=>	[
                'publicKey'		=>	env('FW_TEST_PK'),
                'reference' 	=> 	$tbl->reference,
                'amount'		=>	intval($tbl->amount_supplied),
                'currencyIso'	=>	'NGN',
                'countryCode'	=>	'NG',
                'userEmail'		=>	$user->email, 
                'userPhoneNo'	=>	$user->phone,
                'userNames'		=>	$user->name,
                'projectName'	=>  env('APP_NAME'),
                'PaymentDescription'	=>	$tbl->description
            ]
        ];

        if( $request->input('source') == 'SUB') {

            $due_subscription = '0.00';

            $subscription_expiry = Subscription::where('user_id', '=', $user->id)
            ->where('mt4_id', '=', $mt4->id)
            ->latest()->first();

            if($subscription_expiry->status == 2)
                abort(404);

            $days_left = new FxmintMemberDashboard();

            $days_left = $days_left->get_date_range('now', $subscription_expiry->expiry );

            if( sizeof($days_left) < 4){

                $due_subscription = intval(env('SUBSCRIPTION_FEE'));

                $due_subscription = $due_subscription * intval(env('EXCHANGE_RATE'));
            }

            return view('subscription-payment', [
                'user' => $user,
                'due_subscription' => $due_subscription,
                'mt4_account' => $mt4->login,
                'payload' => json_encode($data)
            ]);
        }
        else{

            // commission

            $due_commission = Commission::where('user_id', '=', Auth::user()->id )
            ->where('status', '=', 0)
            ->where('mt4_id', $mt4->id)
            ->sum('m_commission');

            $due_commission = $due_commission * intval(env('EXCHANGE_RATE'));

            $user = User::find(Auth::user()->id);
        
            return view('commission-payment', [
                'user'              => $user,
                'due_commission'    => $due_commission,
                'mt4_account'       => $mt4->login,
                'payload'           => json_encode($data)
            ]);
        }

    }

    public function http_get($url){

	    $ch = curl_init(); 

	    $headers = array(
	        'Authorization: Bearer ' . env('FW_TEST_SK'),
	        'Content-type: application/json'
	    ); 
	 
	    curl_setopt_array($ch, [
	    	CURLOPT_URL 			=> $url,
	        CURLOPT_RETURNTRANSFER 	=> true,
	        CURLOPT_HTTPHEADER 		=> $headers
	    ]);
	    
	    $data = curl_exec($ch);

	    curl_close($ch);

	    return $data;
	}

    public function verify_transaction(Request $request){

        $transaction_ref =  $request->query('data');

        $url            =   env('FW_API_BASE') . '/transactions/'.$transaction_ref.'/verify';

	    $resp           =   $this->http_get( $url );

	    return $resp;
    }
}
