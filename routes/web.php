<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// middleware('authAdmin')->
Route::middleware('authAdmin')->prefix('admin')->namespace('Admin')->group(function () {

    Route::group(['prefix' => 'user'], function () {
        Route::name('user.index')->get('/', 'UsersController@index');
    });
    // Route::middleware('redac')->group(function () {

    //     Route::name('admin')->get('/', 'AdminController@index');

    //     // Posts
    //     Route::name('posts.seen')->put('posts/seen/{post}', 'PostController@updateSeen')->middleware('can:manage,post');
    //     Route::name('posts.active')->put('posts/active/{post}/{status?}', 'PostController@updateActive')->middleware('can:manage,post');
    //     Route::resource('posts', 'PostController');

    //     // Notifications
    //     Route::name('notifications.index')->get('notifications/{user}', 'NotificationController@index');
    //     Route::name('notifications.update')->put('notifications/{notification}', 'NotificationController@update');

    //     // Medias
    //     Route::view('medias', 'back.medias')->name('medias.index');

    // });

    // Route::middleware('admin')->group(function () {
   
        // Users
        // Route::name('users.seen')->put('users/seen/{user}', 'UserController@updateSeen');
        // Route::name('users.valid')->put('users/valid/{user}', 'UserController@updateValid');
        // Route::resource('users', 'UserController', ['only' => [
        //     'index', 'edit', 'update', 'destroy'
        // ]]);

        // // Categories
        // Route::resource('categories', 'CategoryController', ['except' => 'show']);

        // // Contacts
        // Route::name('contacts.seen')->put('contacts/seen/{contact}', 'ContactController@updateSeen');
        // Route::resource('contacts', 'ContactController', ['only' => [
        //     'index', 'destroy'
        // ]]);

        // // Comments
        // Route::name('comments.seen')->put('comments/seen/{comment}', 'CommentController@updateSeen');
        // Route::resource('comments', 'CommentController', ['only' => [
        //     'index', 'destroy'
        // ]]);

        // // Settings
        // Route::name('settings.edit')->get('settings', 'AdminController@settingsEdit');
        // Route::name('settings.update')->put('settings', 'AdminController@settingsUpdate');

    // });

});
