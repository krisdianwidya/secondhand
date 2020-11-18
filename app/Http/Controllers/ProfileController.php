<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function edit(User $user)
    {
        return view('profile.edit');
    }

    public function setProfilePicture(Request $request)
    {
        dd($request->photo);
    }

    public function getProfile(User $user)
    {
        $user = Auth::user();
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $user = Auth::user();
        if ($request->ajax()) {
            if ($this->validate($request, [
                'name' => ['required', 'string', 'max:255'],
                'username' => ['required', 'string', 'min:5', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'phone' => ['nullable', 'numeric'],
                'password' => ['nullable', 'string', 'min:8'],
            ])) {
                $user = $user->update([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'birth_date' => $request->birth_date,
                    'address' => $request->address,
                    'password' => Hash::make($request->password)
                ]);

                return response()->json($user);
            } else {
                return response()->json($this->errors());
            }
        }
    }
}
