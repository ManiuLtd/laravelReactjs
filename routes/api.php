<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([ 'prefix' => 'v2' ], function() {
	Route::post('/login', 'Api\\Auth\\AuthController@login')->name('loginApi')->middleware('cors');
});
Route::group([ 'prefix' => 'v2/user' ], function()
{
	Route::get('/', 'Api\\UsersController@index')->name('user.index')->middleware('cors');
	Route::get('edit/{id}', 'Api\\UsersController@edit')->name('user.index')->middleware('cors');
	Route::put('/update/{id}', 'Api\\UsersController@update')->middleware('cors');
	Route::post('/store', 'Api\\UsersController@store')->middleware('cors');
	Route::delete('/destroy/{id}', 'Api\\UsersController@destroy')->middleware('cors');
});


Route::get('breweries',  'Api\\UsersController@index')->middleware('cors');