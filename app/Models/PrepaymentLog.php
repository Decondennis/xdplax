<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrepaymentLog extends Model
{
    use HasFactory;

    protected $table = 'prepayment_log';

    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'user_id', 'mt4_id', 'amount_supplied', 'reference', 'description'
    ];

}
 