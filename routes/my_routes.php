<?php 
    use App\Http\Controllers\AcademyController;
    use App\Http\Controllers\SoftwareController;
    use App\Http\Controllers\TermsController;
    use App\Http\Controllers\WebhomeController;
    use App\Http\Controllers\FxmintdashboardController;
    use App\Http\Controllers\FxmintController;
    use App\Http\Controllers\FxmintMemberDashboardController;
    use App\Http\Controllers\SubscriptionController;
    use App\Http\Controllers\CommissionController;
    use App\Http\Controllers\ProfitController;
    use App\Http\Controllers\MetatraderController;
    use App\Http\Controllers\ViewMemberSubController;
    use App\Http\Controllers\ViewMemberCommController;
    use App\Http\Controllers\ViewMemberProfitController;
    use App\Http\Controllers\PaymentController;
    use App\Http\Controllers\EditProfitController;
    use App\Http\Controllers\SelectAccController;
    
    use App\Models\FxmintDashboard;
    use App\Models\PrepaymentLog;
    use App\Models\Subscription;
    use App\Models\FxmintMemberDashboard;
    use App\Models\User;
    use App\Models\Metatrader;
    use App\Models\Commission;

    use Illuminate\Http\Request;

   
    Route::resource('/academy', AcademyController::class)->middleware('guest');

    Route::resource('/software', SoftwareController::class)->middleware('guest');

    Route::resource('/terms', TermsController::class)->middleware('guest');

    Route::resource('/web-home', WebhomeController::class)->middleware('guest');

    Route::resource('/fxmint-dashboard', FxmintdashboardController::class)->middleware('auth');

    Route::resource('/fxmint-member-dashboard', FxmintMemberDashboardController::class)->middleware('auth');

    Route::resource('/fxmint', FxmintController::class);

    Route::resource('/view-subscription', SubscriptionController::class)->middleware('auth');

    Route::resource('/view-commission', CommissionController::class)->middleware('auth');

    Route::resource('/view-profit', ProfitController::class)->middleware('auth');

    Route::resource('/view-metatrader', MetatraderController::class)->middleware('auth');

    Route::resource('/view-member-sub', ViewMemberSubController::class)->middleware('auth');

    Route::resource('/view-member-comm', ViewMemberCommController::class)->middleware('auth');

    Route::resource('/view-member-profit', ViewMemberProfitController::class)->middleware('auth');

    Route::resource('/select-acc',SelectAccController::class)->middleware('auth');

    Route::get('/edit-profit/{id}', [EditProfitController::class, 'index'])
    ->middleware('auth')
    ->name('edit-profit');


    Route::get('/subscription-payment', [PaymentController::class, 'subscription'])->middleware('auth')->name('subscription-payment');

    Route::get('/commission-payment', [PaymentController::class, 'commission'])->middleware('auth');

    Route::get('/email-auto-suggest', function(Request $request){

        $mdl = new FxmintDashboard();

        return response()->json( $mdl->search_by_email($request->query('query')) );

    })->middleware('auth')->name('email-auto-suggest');


    
    Route::post('/prepay', [PaymentController::class, 'log_payment'])->middleware('auth');
    
    Route::get('/prepay', [PaymentController::class, 'subscription'])->middleware('auth');

    Route::get('/vtrnx', [PaymentController::class, 'verify_transaction'])->middleware('auth');


    Route::post('fw-webhook', function(Request $request) {
        
        $payload = json_decode( json_encode( $request->input() ) );

        $ref = $payload->TxRef;

        $exec_path = explode('-', $ref);

        if( $exec_path[0] == 'SUB' ) {

            //payment log
            $rec = PrepaymentLog::where('reference', '=', $ref)->first();
            
            if ( empty($rec) ) 
                return 0;

            $rec->amount_processed = $payload->Charged_amount;
            $rec->status = 1;
            
            //subscription 
            $sub = Subscription::where('user_id', '=', $rec->user_id)
            ->where('mt4_id', '=', $rec->mt4_id)
            ->update(['status'=>2]);

            if( ! $sub ) {

                return 0;
            }

            $subscription_expiry = Subscription::where('user_id', '=', $rec->user_id)->where('mt4_id', '=', $rec->mt4_id)->where('status', '=', 2)->latest()->first();

            $days_left = new FxmintMemberDashboard();

            $extension = 186 + sizeof($days_left->get_date_range('now', $subscription_expiry->expiry ) );

            $new_sub = new Subscription();
                $new_sub->user_id   =   $rec->user_id;
                $new_sub->mt4_id    =   $rec->mt4_id;
                $new_sub->amount    =   $rec->amount_processed;
                $new_sub->expiry    =   date('Y-m-d', strtotime('now + '. $extension .' days'));
                $new_sub->status    =   0;
            $new_sub->save();

            $rec->save();
           
            return 1;
        }
        else{

            //payment log
            $rec = PrepaymentLog::where('reference', '=', $ref)->first();
            
            if ( empty($rec) ) 
                return 0;

            $rec->amount_processed = $payload->Charged_amount;
            //update payment status
            $rec->status = 1;

            //comm 
            $comm = Commission::where('user_id', '=', $rec->user_id)
            ->where('mt4_id', '=', $rec->mt4_id)
            ->update(['status'=>1]);

            if( ! $comm ) {
                return 0;
            }

            $rec->save();
           
            return 1;
        } 

    });

    Route::get('/tr-account/{acc}', function($acc){

        session(['mt4-account' => $acc]);

        return redirect('fxmint-member-dashboard');

    })->middleware('auth')->name('tr-account');


    Route::get('/mt4options', function(Request $request) {

        $email = $request->query('email');

        $user = User::where('email', $email)->first();

        $mt4_details  = Metatrader::where('user_id', $user->id)->get();

        return json_encode($mt4_details);

    })->middleware('auth');