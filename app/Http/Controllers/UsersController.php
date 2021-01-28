<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\DocumentType;
use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function getUser()
    {
        $user = Auth::user();
        return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $user);
    }

    /**
     * 
     */
    public function getDocumentTypes()
    {
        $document_types = DocumentType::whereStatusId($this->activeCode)->get();
        return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $document_types);
    }

    /**
     * 
     */
    public function getCities()
    {
        $cities = City::whereStatusId($this->activeCode)->get();
        return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $cities);
    }

    /**
     * 
     */
    public function getRoles()
    {
        $roles = Role::all();
        return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $roles);
    }

    /**
     * This function is used to register a user and assign him a role (at the moment he is only invited and super admin).
     * @param String $request->fullname.
     * @param String $request->email.
     * @param String $request->password.
     * @param Integer $request->document_type.
     * @param String $request->document.
     * @param Integer $request->city.
     * @return Array with the response obtained in the request.
     */
    public function createUser(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $preUser = User::where('email', $request->email)->first();
            if(isset($preUser->id) && $preUser->status_id == $this->inactiveCode){
                $preUser->status_id = $this->activeCode;
                $preUser->save();
                return $this->response(true, ['type' => 'success', 'content' => "Acabamos de activar tu cuenta con correo electronico <b>$preUser->email</b> y id <b>N° $preUser->id</b>"], $preUser);
            }else if(isset($preUser->id) && $preUser->status_id == $this->activeCode){
                return $this->response(false, ['type' => 'error', 'content' => "El usuario con correo electronico <b>$preUser->email</b> ya se encuentra registrado con el id <b>N° $preUser->id</b>"], $preUser);
            }

            $user = new User();
            $user->uid = Hash::make($request->fullname);
            $user->fullname = $request->fullname;
            $user->email = $request->email;
            $user->password = Hash::make($request->document);
            $user->contraseña = Hash::make($request->email);
            $user->document_type_id = $request->document_type['id']; 
            $user->document = $request->document;
            $user->city_id = $request->city['id']; 
            $user->status_id = $this->inactiveCode;
            $user->verification_code = 0;
            $user->verifited_at = Carbon::parse('00-00-00 00:00:00')->format('Y-m-d H:i:s');
            $user->save();
            $user->assignRole('Super Admin');

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => "El usuario con correo electronico <b>$user->email</b> se creo exitosamente con el id <b>N° $user->id</b>"], $user);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => "Ocurrio un problema al crear el usuario con el correo electronico <b>$request->email</b>"], $result);
        }
    }

    /**
     * This function is used to obtain all the users that are in the database.
     * @return Array with the response obtained of the request.
     */
    public function getUsers(Request $request)
    {
        $result = '';
        $search = $request->get('query');
        $result = User::with(['status', 'city', 'document_type', 'roles', 'permissions']);
        if(isset($search) && $search != "" && $search != null){
            $result->where('fullname', 'like', $request->fullname);
            $result->orWhere('email', 'like', $request->email);
            $result->orWhere('id', 'like', $request->id);
            $result->orWhere('document', 'like', $request->document);
        }
        $count = $result->count();
        $result->limit($request->limit)->skip($request->limit * ($request->page - 1));
        $result = $result->get()->toArray();

        return ['data' => $result, 'count' => $count];
    }

    /**
     * 
     */
    public function changeStatus(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $users = User::where('id', $request->id)->first();
            $users->status_id = $users->status_id == 1 ? $this->inactiveCode : $this->activeCode;
            $users->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho.'], $users);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un error al momento de cambiar el estado de la ciudad,'], $result);
        }
    }

    /**
     * This function is used to register a user and assign him a role (at the moment he is only invited and super admin).
     * @param String $request->fullname.
     * @param String $request->email.
     * @param String $request->password.
     * @param Integer $request->document_type.
     * @param String $request->document.
     * @param Integer $request->city.
     * @return Array with the response obtained in the request.
     */
    public function editUser(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $preUser = User::with(['roles', 'permissions'])->first();
            $user = User::with(['roles', 'status', 'permissions', 'city', 'document_type'])->find($request->id);
            $user->uid = Hash::make($request->fullname);
            $user->fullname = $request->fullname;
            $user->email = $request->email;
            $user->document_type_id = $request->document_type['id']; 
            $user->document = $request->document;
            $user->city_id = $request->city['id']; 
            $user->status_id = $this->activeCode;
            $user->save();
            
            foreach ($preUser->roles as $rol){
                // return $rol['name'];
                $user->removeRole($rol['name']);
                // $user->removeRole($rol['name']);
            }

            foreach($request->roles as $rol){
                $user->assignRole($rol['name']);
            }

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => "El usuario con correo electronico <b>$user->email</b> se edito exitosamente."], $user);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => "Ocurrio un problema al editar el usuario con el correo electronico <b>$request->email</b>"], $result);
        }
    }

    /**
     * 
     */
    public function deleteUser(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $user = User::with(['roles'])->find($request->id);
            foreach($user->roles as $rol){
                $user->removeRole($rol['name']);
            }
            $user->delete();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], []);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un error al momento de borrar el usuario'], $result);
        }
    }

    /**
     * This function is used to register a user and assign him a role (at the moment he is only invited and super admin).
     * @param String $request->fullname.
     * @param String $request->email.
     * @param String $request->password.
     * @param Integer $request->document_type.
     * @param String $request->document.
     * @param Integer $request->city.
     * @return Array with the response obtained in the request.
     */
    public function registerUser(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $preUser = User::where('email', $request->email)->first();
            if(isset($preUser->id) && $preUser->status_id == $this->inactiveCode){
                $preUser->status_id = $this->activeCode;
                $preUser->save();
                return $this->response(true, ['type' => 'success', 'content' => "Acabamos de activar tu cuenta con correo electronico <b>$preUser->email</b> y id <b>N° $preUser->id</b>"], $preUser);
            }else if(isset($preUser->id) && $preUser->status_id == $this->activeCode){
                return $this->response(false, ['type' => 'error', 'content' => "El usuario con correo electronico <b>$preUser->email</b> ya se encuentra registrado con el id <b>N° $preUser->id</b>"], $preUser);
            }

            $user = new User();
            $user->uid = Hash::make($request->fullname);
            $user->fullname = $request->fullname;
            $user->email = $request->email;
            $user->password = Hash::make($request->document);
            $user->contraseña = Hash::make($request->email);
            $user->document_type_id = $request->document_type['id']; 
            $user->document = $request->document;
            $user->city_id = $request->city['id']; 
            $user->status_id = $this->inactiveCode;
            $user->verification_code = 0;
            $user->verifited_at = Carbon::parse('00-00-00 00:00:00')->format('Y-m-d H:i:s');
            $user->save();
            $user->assignRole('Invitado');

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => "Bienvenido! $request->fullname, te acabamos de enviar un correo electronico $request->email para que puedas terminar tu registro, recuerda que el correo puede estar en el spam."], $user);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => "Ocurrio un problema al crear el usuario con el correo electronico <b>$request->email</b>"], $result);
        }
    }

    /**
     * 
     */
    public function activeUser(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $user = User::where('email', $request->email)->first();
            if($user->status_id == $this->activeCode) {
                return $this->response(false, ['type' => 'error', 'content' => "El usuario <b>$user->fullname</b> con correo electronico <b>$request->email</b> ya se encuentra activo."], []); 
            }
            $user->password = Hash::make($request->password);
            $user->status_id = $this->activeCode;
            $user->save();

            $status = true; 
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Activamos exitosamente tu cuenta ya puedes ingresar.'], $user);
        }else {
            return $this->response(false, ['type' => 'error', 'content' => 'error'], $result);
        }

    }
}
