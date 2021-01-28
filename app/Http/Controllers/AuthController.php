<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\VerificationCodeRequest;
use App\Mail\LoginAuthentication;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * This function is used to return the view that the project will render.
     * @return View the view that will finally render.
     */
    public function home()
    {
        return view("welcome");
    }

    /**
     * This function is used to log in and send the end user.
     * @param String $request->email, with the email of the end user.
     * @param String $request->password, with the password of the end user.
     * @return Array with the response obtained of the request.
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only("email", "password");
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $activeUser = User::where("email", $request->email)->whereStatusId($this->activeCode)->first();
            if(isset($activeUser->id)){
                $code = rand(0, 999999);
                $activeUser->verification_code = $code;
                $activeUser->save();
                Mail::to($user->email)->send(new LoginAuthentication($code));
                return $this->response(true, ["type" => "success", "content" => "Ya enviamos el codigo de verificación al correo ingresado."], []);
            }else{
                return $this->response(false, ["type" => "error", "content" => "El usuario que ingreso no esta habilitado para poder ingresar."], []);
            }
        }else{
            return $this->response(false, ["type" => "error", "content" => "Los datos ingresados son erroneos."], []);
        }
    }

    /**
     * This function is used to log in and verify the verification code that the end user will send.
     * @param String $request->email, with the email of the end user.
     * @param String $request->password, with the password of the end user.
     * @param String $request->code, with the verification code that send the end user.
     * @return Array with the response obtained of the request.
     */
    public function verificationCode(VerificationCodeRequest $request)
    {
        $credentials = $request->only("email", "password");
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $activeUser = User::where("email", $request->email)->whereStatusId($this->activeCode)->whereVerificationCode($request->code)->first();
            if(isset($activeUser->id)){
                $token = $user->createToken("Prueba")->accessToken;
                return $this->response(true, ["type" => "success", "content" => "Bienvenido."], [
                    'token' => $token,
                    'roles' => $user->getRoleNames(),
                    'permissions' => $user->getAllPermissions()
                ]);
            }else{
                return $this->response(false, ["type" => "error", "content" => "El codigo ingresado es invalido."], []);
            }
        }else{
            return $this->response(false, ["type" => "error", "content" => "Los datos ingresados son erroneos."], []);
        }
    }
}
