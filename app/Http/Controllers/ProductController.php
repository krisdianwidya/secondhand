<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except('categorySearch', 'show', 'userProducts');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function search(Request $request)
    {
        if ($request->category) {
            $category = Category::findOrFail($request->category);
            $products = $category->products->sortByDesc('updated_at');
        } elseif ($request->keyword) {
            $products = Product::where('title', 'like', '%' . $request->keyword . '%')
                ->orWhere('description', 'like', '%' . $request->keyword . '%')
                ->get();
        }

        return view('products.products', compact('products'));
    }

    public function userProducts(User $user)
    {
        $products = $user->products;
        return view('user.products', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('products.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5',
            'description' => 'required|min:10',
            'categories' => 'required',
            'price' => 'required|min:4|numeric',
            'image' => 'required|array',
            'image.*' => 'distinct|file|mimes:jpg,jpeg,bmp,png|max:10240|dimensions:max_height=4000,max_width=4000'
        ]);

        foreach ($request->image as $img) {
        }

        if ($request->hasFile('image')) {

            foreach ($request->image as $img_product) {
                $fileName = time() . '.' . $img_product->getClientOriginalName();
                $img_product->storeAs('assets/uploads', $fileName, 'public');
                $arr_img[] = $fileName;
            }

            auth()->user()->products()->create([
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'image' => json_encode($arr_img)
            ])->categories()->attach($request->categories);
        }

        return redirect(route('home'))->with('message', 'Stuff added succesfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $this->authorize('update-delete-product', $product);
        $categories = Category::all();
        return view('products.edit', compact('categories', 'product'));
    }

    public function getProductCategories(Product $product)
    {
        return response()->json(['categories' => $product->categories, 'sold' => $product->sold]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $this->authorize('update-delete-product', $product);
        $this->validate($request, [
            'title' => 'required|min:5',
            'description' => 'required|min:10',
            'categories' => 'required',
            'price' => 'required|min:4|numeric'
        ]);


        $arr_img = $product->image;

        if ($request->hasFile('image')) {

            // delete old image
            foreach (json_decode($product->image) as $exist_img) {
                if (Storage::exists('public/assets/uploads/' . $exist_img)) {
                    Storage::delete('public/assets/uploads/' . $exist_img);
                }
            }
            foreach ($request->image as $img_product) {
                $fileName = time() . '.' . $img_product->getClientOriginalName();
                $img_product->storeAs('assets/uploads', $fileName, 'public');
                $new_img[] = $fileName;
            }
            $arr_img = json_encode($new_img);
        }

        $product->update([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'sold' => $request->sold == 0 ? 0 : 1,
            'image' => $arr_img
        ]);
        $product->categories()->sync($request->categories);

        return redirect(route('products.show', $product->id))->with('message', 'Stuff updated succesfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $this->authorize('update-delete-product', $product);
        foreach (json_decode($product->image) as $exist_img) {
            if (Storage::exists('public/assets/uploads/' . $exist_img)) {
                Storage::delete('public/assets/uploads/' . $exist_img);
            }
        }

        $product->comments()->delete();
        $product->categories()->detach();
        $product->delete();

        return redirect(route('products.user_products', auth()->user()->id))->with('message', 'Stuff updated succesfully');
    }
}
