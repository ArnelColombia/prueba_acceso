<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    /* ==================== Functions ======================== */
    
    /**
     * This function is used to format the response that will be shown to the end user.
     * @param Boolean $status, with the status obtained of the request.
     * @param Array $message, with the message that will be sent to the user obtained from the request.
     * @param Array $data, with the data obtained from the request made.
     * @return Array with the formatted response that will finally be sent to the user. 
     */
    public function response($status, $message = [], $data = [])
    {
        if($message['type'] == "success"){
            $message = $message;
            $message['code'] = 200;
        }else if($message['type'] == "error"){
            $message = $message;
            $message['code'] = 500;
        }else if($message['type'] == "warning"){
            $message = $message;
            $message['code'] = 300;
        }else{
            abort(500);
        }

        return ['transaction' => ['status' => $status], 'message' => $message, 'data' => $data];
    }
}
