<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* Auth Routes */
Route::prefix("auth")->group(function(){
    Route::post("/login", "AuthController@login");
    Route::post("/verificationCode", "AuthController@verificationCode");
});

/* Users Routes */
Route::prefix('users')->group(function(){
    Route::get('/getUser', 'UsersController@getUser')->middleware(['auth:api']);
    Route::get('/getDocumentTypes', 'UsersController@getDocumentTypes');
    Route::get('/getCities', 'UsersController@getCities');
    Route::post('/createUser', 'UsersController@createUser')->middleware(['auth:api']);
    Route::post('/getUsers', 'UsersController@getUsers')->middleware(['auth:api']);
    Route::post('/changeStatus', 'UsersController@changeStatus')->middleware(['auth:api']);
    Route::get('/getRoles', 'UsersController@getRoles')->middleware(['auth:api']);
    Route::post('/editUser', 'UsersController@editUser')->middleware(['auth:api']);
    Route::post('/deleteUser', 'UsersController@deleteUser')->middleware(['auth:api']);
    Route::post('/registerUser', 'UsersController@registerUser');
    Route::post('/activeUser', 'UsersController@activeUser');
});

/* Cities Routes */
Route::prefix('cities')->group(function(){
    Route::post('/getCities', 'CitiesController@getCities')->middleware(['auth:api']);
    Route::post('/changeStatus', 'CitiesController@changeStatus')->middleware(['auth:api']);
    Route::post('/editCity', 'CitiesController@editCity')->middleware(['auth:api']);
    Route::post('/deleteCity', 'CitiesController@deleteCity')->middleware(['auth:api']);
    Route::post('/createCity', 'CitiesController@createCity')->middleware(['auth:api']);
});

/* Customer Routes */
Route::prefix('customers')->group(function(){
    Route::post('/createCustomer', 'CustomerController@createCustomer')->middleware(['auth:api']);
    Route::post('/getCustomers', 'CustomerController@getCustomers')->middleware(['auth:api']);
    Route::post('/changeStatus', 'CustomerController@changeStatus')->middleware(['auth:api']);
    Route::post('/deleteCustomer', 'CustomerController@deleteCustomer')->middleware(['auth:api']);
    Route::post('/editCustomer', 'CustomerController@editCustomer')->middleware(['auth:api']);
});