<?php

namespace App\Http\Controllers;

use App\Events\NewComment;
use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth'])->except('index');
    }

    public function index(Product $product)
    {
        return response()->json($product->comments()->with('user')->latest()->get());
    }

    public function store(Request $request, Product $product)
    {
        if ($request->ajax()) {
            if ($this->validate($request, [
                'comment' => 'required|min:5|max:255'
            ])) {
                $comment = $product->comments()->create([
                    'user_id' => auth()->user()->id,
                    'body' => $request->comment
                ]);

                $comment = Comment::where('id', $comment->id)->with('user')->first();

                broadcast(new NewComment($comment))->toOthers();

                return response()->json($comment);
            } else {
                return response()->json($this->errors());
            }
        }
    }
}
