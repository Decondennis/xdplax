<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DateTime;
use DateInterval;
use DatePeriod;

class FxmintMemberDashboard extends Model
{
    use HasFactory;

    protected $table = 'mt4_details';
    protected $primaryKey = 'id';

    public function get_date_range($startDate, $endDate, $format = "Y-m-d") {

        $begin = new DateTime($startDate);
        $end = new DateTime($endDate);
  
        $interval = new DateInterval('P1D'); // 1 Day
        $dateRange = new DatePeriod($begin, $interval, $end);
  
        $range = array();
  
        foreach ($dateRange as $date) {
  
            $range[] = $date->format($format);
        }
  
        return $range;
    }

}
