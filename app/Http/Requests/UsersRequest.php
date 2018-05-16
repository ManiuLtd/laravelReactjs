<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {       
      
        switch($this->method())  {
            case 'POST':
            {
                return [
                    'username' => 'required|unique:users,username',
                    'email' => 'required|email|max:255|unique:users,email',
                ];
            }
            case 'PATCH':
            {
                return [
                    'username' => 'required|unique:users,username,'.$request->id,
                    'email' => 'required|email|max:255|unique:users,email,'.$request->id,
                ];
            }
            default: break;
        }
    }

    public function messages() {
        return [
            'username.required' => 'Please Enter username User',
            'username.unique' => 'This username User Is Exist',
            'email.required' => 'Please Enter Email',
            'email.email' => 'Format Email',
            'email.unique' => 'This Email Is Exist',
        ];
    }
}
