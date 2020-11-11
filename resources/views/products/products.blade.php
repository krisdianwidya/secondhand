<div class="row d-flex justify-content-center my-md-4">
    <div class="row col-md-8">
        @foreach($products as $product)
        <a href="{{ route('products.show', $product->id) }}" class="col-md-4 mx-auto p-0 shadow-sm text-decoration-none text-dark">
            <div class="card">
                <div class="row justify-content-center mt-md-3">
                    <img src="{{ asset('storage/assets/uploads/'.$product->image) }}" class="card-img-top img-fluid" style="width: 200px; height: 200px; object-fit: scale-down;" alt="...">
                </div>

                <div class="card-body">
                    <h5 class="card-title">{{ $product->title }}</h5>
                    <p class="card-text"> <strong> Rp {{ $product->price }} </strong></p>
                </div>
            </div>
        </a>
        @endforeach
    </div>
</div>