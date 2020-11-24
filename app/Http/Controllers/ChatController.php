<?php

namespace App\Http\Controllers;

use App\Events\NewPrivateMessage;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index($id)
    {
        // $this->authorize('profile-features', $id);
        return view('user.chat');
    }

    public function getFriends($id)
    {
        // $this->authorize('profile-features', $id);
        return User::all();
    }

    public function getPrivateMessages($user_id, $receiver_id)
    {

        $messages = Message::with('user')
            ->where(['user_id' => auth()->user()->id, 'receiver_id' => $receiver_id])
            ->orWhere(['user_id' => $receiver_id, 'receiver_id' => auth()->user()->id])
            ->get();
        // return [$user_id, $receiver_id];
        return $messages;
    }

    public function setPrivateMessages(Request $request, $user_id, $receiver_id)
    {
        $user = Auth::user();
        if ($request->ajax()) {

            if ($this->validate($request, [
                'message' => 'required|max:255'
            ])) {

                $message = auth()->user()->messages()->create([
                    'message' => $request->message,
                    'receiver_id' => $receiver_id
                ]);

                $message = Message::where('id', $message->id)->with('user')->first();

                broadcast(new NewPrivateMessage($message, $user))->toOthers();

                return response()->json($message);
            } else {
                return response()->json($this->errors());
            }
        }
    }
}
