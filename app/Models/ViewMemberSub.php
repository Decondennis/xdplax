<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewMemberSub extends Model
{
    use HasFactory;

    protected $table = 'subscription';
    protected $primaryKey = 'id';
}
