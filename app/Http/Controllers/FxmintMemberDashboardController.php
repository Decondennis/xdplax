<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\FxmintMemberDashboard;
use App\Models\Profit;
use App\Models\Commission;
use App\Models\Subscription;
use App\Models\User;
use App\Models\Metatrader;


class FxmintMemberDashboardController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        
        $user = User::find(Auth::user()->id);


        $mt4_login = Metatrader::where('login', session('mt4-account'))->first();
        if(empty($mt4_login))
            abort(404);
        $mt4_id = $mt4_login->id;



        $m_profit = Profit::where('user_id', '=', Auth::user()->id )
        ->where('mt4_id', $mt4_login->id)
        ->sum('m_profit');
        
        $m_commission = Commission::where('status', '=', 1)
        ->where('user_id', '=', Auth::user()->id )
        ->where('mt4_id', $mt4_login->id)
        ->sum('m_commission');

        $due_commission = Commission::where('user_id', '=', Auth::user()->id )
        ->where('status', '=', 0)
        ->where('mt4_id', $mt4_login->id)
        ->sum('m_commission');

        $subscription_expiry = Subscription::where('user_id', '=', Auth::user()->id)
        //->where('status', '=', 0)
        ->where('mt4_id', $mt4_login->id)
        ->latest()->first();

        if( empty($subscription_expiry) )
            abort(404);

        $due_subscription = '0.00';

        $days_left = new FxmintMemberDashboard();
        $days_left = $days_left->get_date_range('now', $subscription_expiry->expiry );

        if( sizeof($days_left) < 4){

            $due_subscription = env('SUBSCRIPTION_FEE');
        }

        $exp_date = explode(' ', $subscription_expiry->expiry);

        //get all user mt4 logins
        $mt4_details  = Metatrader::where('user_id', '=', Auth()->user()->id )->get();

        return view('fxmint-member-dashboard', [
            'm_profit'              => number_format($m_profit,2),
            'm_commission'          => number_format($m_commission,2),
            'due_commission'        => number_format($due_commission,2),
            'due_subscription'      =>  number_format($due_subscription,2),
            'expiry'                =>  explode('-', $exp_date[0]),
            'user'                  =>  $user,
            'mt4_details'           =>  $mt4_details
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $mt4_details = new FxmintMemberDashboard;
            $mt4_details->user_id = Auth::user()->id;
            $mt4_details->login = $request->input('login');
            $mt4_details->password = $request->input('password');
            $mt4_details->server = $request->input('server');
        $mt4_details->save();


        $sub = Subscription::create([
            'user_id' => Auth::user()->id,
            'mt4_id' => $mt4_details->id,
            'amount' => 0.00,
            'expiry' => date('Y-m-d', time()),
            'status' => 1,
        ]); 

        session( ['mt4-account' => $mt4_details->login] );

        return redirect()->route('subscription-payment');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $users = DB::profit('profit')->select('id','m_profit')->get();

        return view('fxmint-member-dashboard')->with('profit', $profit);
    }

}




