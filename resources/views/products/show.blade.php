@extends('layouts.app')

@section('content')
<div class="container">
    @if (session('message'))
    <div class="alert alert-success alert-dismissible fade show">
        {{ session('message') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
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
                    <div id="carouselExampleControls" class="carousel slide" data-ride="false">
                        <div class="carousel-inner">
                            @foreach(json_decode($product->image) as $arr => $product_pic)
                            <div class="carousel-item {{$arr == 0 ? 'active' : ''}}">
                                <img src="{{ asset('storage/assets/uploads/'.$product_pic) }}" class="card-img-top img-fluid d-block w-100 alt=" ...">
                            </div>
                            @endforeach
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- <div class="card-body row justify-content-center align-items-center">
                        <img src="{{ asset('storage/assets/uploads/'.$product->image) }}" class="card-img-top img-fluid" style="width: 200px; height: 200px; object-fit: scale-down;" alt="...">
                    </div> -->
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

                                    <a type="button" class="btn btn-secondary" id="delete-product">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                    <form style="display:none" action="{{ route('products.destroy',$product->id) }}" id="{{ 'form-delete-'.$product->id }}" method="post">
                                        @csrf
                                        @method('DELETE')
                                    </form>
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

            <div class="bg-secondary rounded-sm my-md-2 text-center text-light">
                Comments Section
            </div>

            @auth

            <div class="comment">
                <textarea class="form-control" name="comment" id="comment" rows="3"></textarea>
                <div id="comment-error">

                </div>
                <button type="button" class="btn btn-primary my-md-2" id="btn-comment">Comment</button>
            </div>


            @endauth

            @guest
            <div>
                <p>Login to comments</p>
            </div>
            @endguest

            <div id="comment-content">

            </div>
        </div>
    </div>
</div>
@endsection