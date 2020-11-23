<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function edit($id)
    {
        $this->authorize('profile-features', $id);
        return view('profile.edit');
    }

    public function setProfilePicture(Request $request, $id)
    {
        $user = Auth::user();
        $this->authorize('profile-features', $id);

        if ($request->hasFile('photo')) {
            if (Storage::exists('public/assets/profile_pic/' . $user->photo)) {
                Storage::delete('public/assets/profile_pic/' . $user->photo);
            }

            $fileName = time() . '.' . $request->photo->getClientOriginalName();
            $request->photo->storeAs('assets/profile_pic', $fileName, 'public');

            $user->update([
                'photo' => $fileName
            ]);
        }
    }

    public function getProfile($id)
    {
        $user = Auth::user();
        $this->authorize('profile-features', $id);
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $this->authorize('profile-features', $id);
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
