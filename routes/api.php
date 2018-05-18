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
Route::group([ 'prefix' => 'v2', 'middleware' => ['jwt-auth','cors'] ], function() {
	Route::post('/login', 'Api\\Auth\\AuthController@login')->name('loginApi');

	Route::get('login', 'Api\\Auth\\AuthController@showLoginForm')->name('login');
	Route::post('login', 'Api\\Auth\\AuthController@login');
	Route::get('logout', 'Api\\Auth\\AuthController@logout')->name('logout');
	 
	// Registration Routes...
	Route::get('register', 'Api\\Auth\\AuthController@showRegistrationForm')->name('register');
	Route::post('register', 'Api\\Auth\\AuthController@register');
	// Password Reset Routes...
	Route::get('password/reset', 'Api\\Auth\\AuthController@showLinkRequestForm')->name('password.request');
	Route::post('password/email', 'Api\\Auth\\AuthController@sendResetLinkEmail')->name('password.email');
	Route::get('password/reset/{token}', 'Api\\Auth\\AuthController@showResetForm')->name('password.reset');
	Route::post('password/reset', 'Api\\Auth\\AuthController@reset');


});
Route::group([ 'prefix' => 'v2/user', 'middleware' => 'cors' ], function()
{
	Route::get('/', 'Api\\UsersController@index')->name('user.index');
	Route::get('edit/{id}', 'Api\\UsersController@edit')->name('user.index');
	Route::put('/update/{id}', 'Api\\UsersController@update');
	Route::post('/store', 'Api\\UsersController@store');
	Route::delete('/destroy/{id}', 'Api\\UsersController@destroy');

	Route::post('/upload', 'Api\\UsersController@upload')->name('uploadFile');
});


Route::get('breweries',  'Api\\UsersController@index')->middleware('cors');