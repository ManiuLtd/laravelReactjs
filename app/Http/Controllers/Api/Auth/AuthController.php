<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function login(Request $request)
    {
    	$credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials)) {
        	$user['status'] = true;
        	$user['info'] = Auth::user();
        } else {
        	$user['status'] = false;
        	$user['info'] = 'Incorrect username/ password please try again';
        }

    	 return response()->json( $user );
       
    }
}
