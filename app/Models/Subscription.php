<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Subscription extends Model
{
    use HasFactory;
    
    protected $table = 'subscription';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'user_id', 'mt4_id', 'amount', 'expiry', 'status'
    ];

    public function user() {

        return $this->belongsTo(User::class);
    }
}
