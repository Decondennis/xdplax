<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Metatrader extends Model
{
    use HasFactory;
    protected $table = 'mt4_details';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'login',
        'password',
        'server',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

}
