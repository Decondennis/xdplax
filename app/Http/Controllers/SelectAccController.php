<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Metatrader;
use Illuminate\Support\Facades\Auth;



class SelectAccController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $login = Metatrader::where('user_id', '=', Auth::user()->id)->get();
        
        return view('select-acc', [ 
            'login'    => $login
        ]);
    }

}
