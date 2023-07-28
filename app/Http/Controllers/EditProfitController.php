<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Profit;

class EditProfitController extends Controller
{
    public function index(Request $request, $id)
    {
        $profit = Profit::where('id', $id)->first();
        
        if(empty($profit))
            abort(403);

        return view('/edit-profit', [
            
            'profit' => $profit
        ]);
    }   

}


