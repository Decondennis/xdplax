<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use App\Models\Subscription;
use App\Models\Metatrader;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'gender' => $request->gender, 
            'phone' => $request->phone,
            'address' => $request->address,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $mt4 = Metatrader::create([
            'user_id'   =>  $user->id,
            'login'     => $request->mt4number,
            'password'  => $request->mt4password,
            'server'    => $request->mt4server,
        ]);

        $sub = Subscription::create([
            'user_id' => $user->id,
            'mt4_id' => $mt4->id,
            'amount' => 0.00,
            'expiry' => date('Y-m-d', time()),
            'status' => 0,
        ]); 

        event(new Registered($user));

        Auth::login($user);

        session(['mt4-account' => $mt4->login]);

        return redirect()->route('subscription-payment');

        //return redirect(RouteServiceProvider::HOME);
    }
}
