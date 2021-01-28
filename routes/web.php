<?php

use Illuminate\Support\Facades\Route;

/* Principal Route */
Route::get("/{any?}", function(){
    return view("welcome");
})->where('any', '^(?!api\/)[\/\w\.-]*');

/* Login Route */
Route::get("/login", function(){
    return view("login");
});

/* Registry Route */
Route::get("/register", function(){
    return view('register');
});