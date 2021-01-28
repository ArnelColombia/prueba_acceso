<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "email" => "required|string|exists:users,email",
            "password" => "required|string"
        ];
    }

    public function messages()
    {
        return [
            "email.required" => "El correo electronico es requerido para saber quien eres.",
            "email.string" => "El correo electronico debe ser alfanumerico.",
            "email.exists" => "El correo electronico ingresado no existe en la base de datos.",
            "password.required" => "La contraseña es requerido para poder validar que realmente eres tu.",
            "password.string" => "La contraseña debe ser alfanumerica."
        ];
    }
}
