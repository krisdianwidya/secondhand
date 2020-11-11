<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $categories = Category::all();
        $categories_json = json_encode($categories);
        $products = Product::orderBy('updated_at', 'desc')->get();
        $products_json = json_encode($products);
        return view('home', compact('categories', 'products'));
    }
}
