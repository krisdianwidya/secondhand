@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Stuff detail</li>
                </ol>
            </nav>
            <div class="d-flex justify-content-between">
                <div class="card col-5">
                    <div class="card-body row justify-content-center align-items-center">
                        <img src="{{ asset('storage/assets/uploads/'.$product->image) }}" class="card-img-top img-fluid" style="width: 200px; height: 200px; object-fit: scale-down;" alt="...">
                    </div>
                </div>
                <div class="card col-6">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="card-top-left">
                                <h1>{{ $product->title }}</h1>
                                <h3 class="text-info">Rp {{ $product->price }}</h3>
                                <p>
                                    posted by
                                    <br>
                                    {{ $product->user->username }}
                                </p>
                            </div>

                            <div class="card-top-right text-right">
                                <span class="badge @if($product->sold) badge-warning @else badge-primary @endif">
                                    @if( $product->sold )
                                    Sold
                                    @else
                                    Available
                                    @endif
                                </span>
                                @auth
                                @if(Auth::user()->id == $product->user_id)
                                <div class="btn-group btn-group-sm mt-md-4" role="group" aria-label="Basic example">
                                    <a href="{{ route('products.edit', $product->id) }}" type="button" class="btn btn-primary" id="edit-product">
                                        <i class="fas fa-pen-square"></i>
                                    </a>
                                    <input type="hidden" name="input-id" id="input-id" value="{{ $product->id }}">
                                    <a type="button" class="btn btn-secondary" id="delete-product">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </div>
                                @endif
                                @endauth
                            </div>
                        </div>
                        <hr>
                        <div class="card-bottom">
                            <p>
                                <strong>{{ $product->description }}</strong>
                            </p>
                            <span>
                                posted on {{ $product->created_at }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection