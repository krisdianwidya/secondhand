@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row offset-md-2">
        <div class="col-md-8">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex justify-content-between">
                    <div class="brd-left d-flex">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Profile</a></li>
                        <li class="breadcrumb-item active" aria-current="page">My Stuff</li>
                    </div>

                    <div class="brd-right">
                        <li>
                            <span class="badge badge-primary">{{ $products->count() }}</span>
                        </li>
                    </div>
                </ol>
            </nav>
            <div class="d-flex flex-wrap" id="products-container">
                @include('products.products')
            </div>
        </div>
        @auth
        <div class="col-md-2">
            <a href="{{ route('products.create') }}" type="button" class="btn btn-primary">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                Sell stuff
            </a>
        </div>
        @endauth
    </div>
</div>
@endsection