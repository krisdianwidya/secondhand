<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;

class CommentController extends Controller
{
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

                return response()->json($comment);
            } else {
                return response()->json($this->errors());
            }
        }
    }
}
