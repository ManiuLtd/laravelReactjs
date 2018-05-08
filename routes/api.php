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

Route::group(['prefix' => 'v2/user', 'middleware' => 'cors' ], function()
{
	Route::get('/', 'Api\\UsersController@index')->name('user.index');
	Route::get('edit/{id}', 'Api\\UsersController@edit')->name('user.index');
	Route::put('/update/{id}', 'Api\\UsersController@update');
	Route::post('/store', 'Api\\UsersController@store');
	Route::delete('/destroy/{id}', 'Api\\UsersController@destroy');
});


Route::get('breweries',  'Api\\UsersController@index')->middleware('cors');