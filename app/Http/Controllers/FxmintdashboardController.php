<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Profit;
use App\Models\Commission;
use App\Models\User;
use App\Models\Subscription;
use App\Models\Metatrader;

use Illuminate\Support\Facades\Gate;

class FxmintdashboardController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() { 

        if( ! Gate::allows('is_admin') ) {

            abort(403);
        }
        
        $total_subscriptions = Subscription::all()->sum('amount');

        $m_commission = Commission::where('status', '=', 1)->sum('m_commission');
        
        $month_subscriptions = Subscription::where('status', '=', 1)
        ->whereMonth('created_at', '=', date('m', time()) )
        ->whereYear('created_at', '=', date('Y', time()))
        ->sum('amount');

        $total_users = User::count();

        $due_commission = Commission::where('status', '=', 0)->sum('m_commission');

        return view('fxmint-dashboard', [
            'total_subscriptions'   => $total_subscriptions,
            'm_commission'          => $m_commission,
            'month_subscriptions'   => $month_subscriptions,
            'total_users'           => $total_users,
            'due_commission'        =>  $due_commission
        ]);
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        
        $user = User::where('email', '=', $request->input('email'))->first();

        if( empty($user) )
            return 0;

        $profit = new Profit;
            $profit->user_id    =   $user->id;
            $profit->mt4_id     =   $request->input('comboMt4');
            $profit->m_profit   =   $request->input('profit');
            $profit->operating_user_id = Auth::user()->id;
        $profit->save();

        $commission = new Commission;
            $commission->user_id    = $user->id;
            $commission->mt4_id     =   $request->input('comboMt4');
            $commission->m_commission = $request->input('commission');
            $commission->operating_user_id = Auth::user()->id;
        $commission->save();

        return redirect('fxmint-dashboard')->with('message' ,'Commission Sent Successfully!');
    }
    
}  

