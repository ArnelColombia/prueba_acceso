<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CitiesController extends Controller
{
    public function getCities(Request $request)
    {
        $result = '';
        $query = $request->get('query');
        $result = City::with(['status']);
        if($query != ""){

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
            $cities = City::where('id', $request->id)->first();
            $cities->status_id = $cities->status_id == 1 ? $this->inactiveCode : $this->activeCode;
            $cities->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho.'], $cities);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un error al momento de cambiar el estado de la ciudad,'], $result);
        }
    }

    /**
     * 
     */
    public function editCity(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $city = City::where('id', $request->id)->first();
            $city->name = $request->name;
            $city->acronym = $request->acronym;
            $city->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $city);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'No se puedo editar la data de la ciudad seleccionada.'], $result);
        }
    }

    /**
     * 
     */
    public function deleteCity(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $city = City::find($request->id);
            $city->delete();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], []);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un error al momento de borrar la ciudad']);
        }
    }

    /**
     * 
     */
    public function createCity(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $city = new City();
            $city->name = $request->name;
            $city->acronym = $request->acronym;
            $city->status_id = $this->activeCode;
            $city->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response(true, ['type' => 'success', 'content' => 'Hecho'], $city);
        }else{
            return $this->response(false, ['type' => 'error', 'content' => 'Ocurrio un problema al momento de crear la ciudad.'], $result);
        }
    }
}
