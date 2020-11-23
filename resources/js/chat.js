let pathArray = window.location.pathname.split('/');
let friendId;

getFriends();

function getFriends(){
    $.get(`/profile/${pathArray[2]}/chat/friends`)
    .done((data) => {
        for(let i=0; i<data.length; i++){
            if(pathArray[2] != data[i].id){
                $('.friends-list')
                    .append(`
                    <a style="cursor: pointer;" class="friend-${data[i].id} text-body">
                        <div class="user-friend d-flex border rounded shadow-sm p-1 mb-2">
                            <img src="/storage/assets/profile_pic/${data[i].photo}" class="img-fluid rounded-circle mr-2" style="max-width: 30px;" alt="profile-picture">
                           <p class="m-0">${data[i].username}</p>
                        </div>
                    </a>`);
                
                $(`.friend-${data[i].id}`).on('click', () => {
                    friendId = data[i].id;
                    $.get(`/profile/${pathArray[2]}/chat/friends/${data[i].id}`)
                    .done((msg) => {
                        for(let i=0; i<msg.length; i++){
                            if(msg[i].user_id == pathArray[2]){
                                $('.chat-message-box')
                                .append(`<div class="user-chat col-6 offset-6 p-0 text-right">
                                    <p class="d-inline-flex bg-primary text-white p-2 rounded">${msg[i].message}</p>
                                </div>`);
                            }else if(msg[i].user.id == friendId){
                                $('.chat-message-box')
                                .append(`<div class="friend-chat p-0 col-6">
                                    <p class="d-inline-flex bg-secondary text-white p-2 rounded">${msg[i].message}</p>
                                </div>`);
                            }                      
                        }
                    })
                    .fail((error) => {
                        console.log(error);
                    })
                    .always(() => {
                        Echo.channel(`chat`)
                        .listen('NewPrivateMessage', (msg) => {
                            // console.log('ok');
                            $('.chat-message-box')
                                .append(`<div class="friend-chat p-0 col-6">
                                    <p class="d-inline-flex bg-secondary text-white p-2 rounded">${msg.message.message}</p>
                                </div>`);
                        });
                    });
                    $('#message-form').removeClass('d-none');
                    window.scrollTo(0,99999);
                });
            }
        }
    })
    .fail((error) => {
        console.log(error);
    });
}

$('#btn-msg').on('click', () => {
    let message_body = $('#message').val();

    $.ajax({
        url: `/profile/${pathArray[2]}/chat/friends/${friendId}`,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "post",
        dataType: "json",
        data: {
            message: message_body
        }
    })
    .done((message) => {
        $('.chat-message-box')
        .append(`<div class="user-chat col-6 offset-6 p-0 text-right">
                    <p class="d-inline-flex bg-primary text-white p-2 rounded">${message.message}</p>
                </div>`);
    })
    .fail((error) => {
        console.log(error);
        // $('#message').addClass('is-invalid');
        // $('#message-error')
        // .append(`<p class='m-0 text-danger'>${error.responseJSON.errors.message[0]}</p>`);
    })
    .always(() => {
        $('#message').val('');
        window.scrollTo(0,99999);
    });
});