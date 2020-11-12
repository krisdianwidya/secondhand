<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::resource('products', ProductController::class);
Route::get('/search', [ProductController::class, 'categorySearch'])->name('products.category_search');
Route::get('/user/product/{user}', [ProductController::class, 'userproducts'])->name('products.user_products');
ROute::get('/product/edit/{product}', [ProductController::class, 'getProductCategories'])->name('product.get_edit');
