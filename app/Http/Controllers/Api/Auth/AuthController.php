<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use JWTAuthException;
use App\Http\Requests;
use App\User;

class AuthController extends Controller
{

	public function __construct() {
        $this->user = new User;
    }

	private function getToken($email, $password) {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
        	
            if (!$token = JWTAuth::attempt(['email' => $email, 'password' => $password ])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token' => $token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }


    public function login(Request $request)    {
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);

            $user->auth_token = $token;
            $user->save();
            $response = [
    			'loggedIn' => true,
    			'data'=>[
    				'id'		 =>	$user->id,
	    			'auth_token' =>	$user->auth_token,
	    			'username'	 =>	$user->username,
	    			'email'		 =>	$user->email
	    		]
    		];           
        }
        else 
          	$response = ['loggedIn' => false, 'data'=>'Record doesnt exists'];

        return response()->json($response, 201);
    }

    public function logout(Request $request) {
        Auth::logout();

        $token = JWTAuth::getToken();

        JWTAuth::setToken($token)->invalidate();

        return response()->json([
            'success' => true
        ]);
    }

}
