<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use Redirect;
class authAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ( !empty(Auth::check()) ) {
            if ( Auth::user()->level == '1' ) {
                return $next($request);
            }
        } 
        // $user = $request->user();
        // if ($user && $user->role === 'admin') {
        //     return $next($request);
        // }
        return redirect('/')->with('error',__('You are not authorized to access that location.'));
       
    }
}
