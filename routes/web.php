<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
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
Route::get('/search', [ProductController::class, 'search'])->name('products.search');
Route::get('/user/product/{user}', [ProductController::class, 'userProducts'])->name('products.user_products');
Route::get('/product/edit/{product}', [ProductController::class, 'getProductCategories'])->name('product.get_edit');

Route::get('/product/{product}/comments', [CommentController::class, 'index']);
Route::post('/product/{product}/comment', [CommentController::class, 'store']);

Route::get('/profile/{profile}/edit', [ProfileController::class, 'edit'])->name('profile.edit');
Route::get('/profile/{profile}/get', [ProfileController::class, 'getProfile'])->name('profile.get_edit');
Route::put('/profile/{profile}', [ProfileController::class, 'update'])->name('profile.update');


Route::post('/profile/picture/{profile}/update', [ProfileController::class, 'setProfilePicture']);
