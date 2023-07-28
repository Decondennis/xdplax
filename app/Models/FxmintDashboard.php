<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class FxmintDashboard extends Model
{
    use HasFactory;


    public function search_by_email($email) {

        $resp = User::where('email', 'LIKE', '%'.$email.'%')->get();

        $data = [];

        foreach($resp as $item){

            $data[] = array('value' => ucwords($item->name) .' - '. $item->email , 'data' => $item->email);
        }

        $data = ['suggestions' => $data];

        return $data;
    }
}
