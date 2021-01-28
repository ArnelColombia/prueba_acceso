<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    /**
     * This function is used to register a user and assign him a role (at the moment he is only invited and super admin).
     * @param String $request->fullname.
     * @param Integer $request->document_type.
     * @param String $request->document.
     * @param Integer $request->city.
     * @return Array with the response obtained in the request.
     */
    public function createCustomer(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $preCustomer = Customer::where('document', $request->document)->first();
            if(isset($preCustomer->id) && $preCustomer->status_id == $this->inactiveCode){
                $preCustomer->status_id = $this->activeCode;
                $preCustomer->save();
                return $this->response(true, ['type' => 'success', 'content' => "Acabamos de activar el cliente <b>$preCustomer->fullname</b> con id <b>N° $preCustomer->id</b>"], $preCustomer);
            }

            $customer = new Customer();
            $customer->fullname = $request->fullname;
            $customer->document_type_id = $request->document_type['id'];
            $customer->document = $request->document;
            $customer->city_id = $request->city['id'];
            $customer->status_id = $this->activeCode;
            $customer->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => "El cliente <b>$customer->fullname</b> se creo exitosamente con el id <b>N° $customer->id</b>"], $customer);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => "Ocurrio un problema al crear el cliente <b>$request->name</b>"], $result);
        }
    }

    /**
     * This function is used to obtain all the customers that are in the database.
     * @return Array with the response obtained of the request.
     */
    public function getCustomers(Request $request)
    {
        $result = '';
        $search = $request->get('query');
        $result = Customer::with(['status', 'city', 'document_type']);
        if(isset($search) && $search != "" && $search != null){
            $result->where(function($q) use ($search){
                $q->where('fullname', 'like', "%$search%");
                $q->orWhere('id', 'like', "%$search%");
                $q->orWhere('document', 'like', "%$search%");
            });
        }

        if(isset($request->type)){
            $result->where('city_id', $request->type);
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
            $users = Customer::where('id', $request->id)->first();
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
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un error al momento de cambiar el estado del cliente,'], $result);
        }
    }

    /**
     * 
     */
    public function deleteCustomer(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $customer = Customer::find($request->id);
            $customer->delete();

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
     * This function is used to register a customer and assign him a role (at the moment he is only invited and super admin).
     * @param String $request->fullname.
     * @param Integer $request->document_type.
     * @param String $request->document.
     * @param Integer $request->city.
     * @return Array with the response obtained in the request.
     */
    public function editCustomer(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $customer = Customer::find($request->id);
            $customer->fullname = $request->fullname;
            $customer->document_type_id = $request->document_type['id']; 
            $customer->document = $request->document;
            $customer->city_id = $request->city['id']; 
            $customer->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => "El cliente <b>$customer->fullname</b> se edito exitosamente."], $customer);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => "Ocurrio un problema al editar el cliente <b>$request->fullname</b>"], $result);
        }
    }
}
