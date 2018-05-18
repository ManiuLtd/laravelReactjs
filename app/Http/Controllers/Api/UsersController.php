<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\UsersRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all();
        return response()->json( $user );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), 
            [
                'username' => 'required|min:5|unique:users,username',
                'email' => 'required| unique:users,email',
            ], 
            [
                'username.required' => 'Please enter a username.',
                'username.min' => 'The username short',
                'email.required' => 'Please enter a email.',
                'username.unique' => 'The username da ton tai',
                'email.unique' => 'The email da ton tai'
            ]
        );
        if($validator->fails()){
            return response()->json([
                    'success' => false,
                    $validator->errors()
            ] );
        } else {
            $name = null;
            if($request->get('image')) {
                $image = $request->get('image');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                \Image::make($request->get('image'))->save(public_path('images/').$name);
            }
            $user = User::create([
                'username'  => $request->username,
                'firstname' => $request->firstname,
                'lastname'  => $request->lastname,
                'email'     => $request->email,
                'password'  => Hash::make('demo'),
                'phone'     => $request->phone,
                'job'       => $request->job,
                'picture'   => $name,
                'address'   => $request->address,
                'gender'    => $request->gender,
                'actived'   => $request->actived
            ]);
            if ($user) {
                return response()->json([
                    'success' => true,
                    'id'      => $user->id
                ]);
            } else {
                return response()->json([
                    'success' => false
                ]);
            }
        }

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return response()->json( $user );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), 
            [
               'username' => 'required|unique:users,username,'.$request->id,
                'email' => 'required|email|max:255|unique:users,email,'.$request->id,
            ], 
            [
                'username.required' => 'Please enter a username.',
                'username.min' => 'The username short',
                'email.required' => 'Please enter a email.',
                'username.unique' => 'The username da ton tai',
                'email.unique' => 'The email da ton tai'
            ]
        );
        if($validator->fails()){
            return response()->json(['success' => false, $validator->errors()]);
        } else {
            $name = null;
            if($request->get('image')) {
                $image = $request->get('image');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                \Image::make($request->get('image'))->save(public_path('images/').$name);
            }
            $user = User::where([
                'id' => $id
            ])->update([
                'username'  => $request->username,
                'firstname' => $request->firstname,
                'lastname'  => $request->lastname,
                'email'     => $request->email,
                'phone'     => $request->phone,
                'picture'   => $name,
                'job'       => $request->job,
                'address'   => $request->address,
                'gender'    => $request->gender,
                'actived'   => $request->actived
            ]);
            if ($user) {
                return response()->json([
                    'success' => true
                ]);
            } else {
                return response()->json([
                    'success' => false
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id', $id)->delete();
        if ($user) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false
            ]);
        }
    }

    public function upload(Request $request) {
         // return response()->json($request->name);
        if($request->get('file')) {
            $image = $request->get('file');
            $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            \Image::make($request->get('file'))->save(public_path('images/').$name);
        }

        // $fileupload = new Fileupload();
        // $fileupload->filename=$name;
        // $fileupload->save();
        return response()->json('Successfully added');
       
    }
}
