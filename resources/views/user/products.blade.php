@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
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
    </div>
</div>
@endsection