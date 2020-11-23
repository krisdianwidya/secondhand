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
                    <li class="breadcrumb-item"><a href="#">Profile</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Chat</li>
                </ol>
            </nav>

            <div class="border rounded bg-white py-3 px-2 d-flex" id="chat-wrapper">

                <div class="col-md-4 p-0 friends-list">

                </div>

                <div class="col-md-8 p-0">
                    <div class=" border rounded shadow-sm p-1 ml-3 justify-content-center">
                        <div class="chat-message-box overflow-auto" style="max-height: 300px;">

                        </div>

                        <div class="input-group d-none" id="message-form">
                            <input type="text" name="message" class="form-control" id="message">
                            <div class="input-group-append">
                                <button class="btn btn-primary" id="btn-msg"><i class="fas fa-paper-plane"></i></button>
                            </div>
                            <div id="message-error">

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
@endsection

@section('script')
<script src="{{ asset('js/chat.js') }}"></script>
@endsection