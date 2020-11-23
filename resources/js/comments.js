let pathArray = window.location.pathname.split('/');

getComments();

function getComments() {
    $.get(`/product/${pathArray[2]}/comments`)
    .done((data) => {
        for(let i=0; i<data.length; i++){
            $('#comment-content')
            .append(`<div class="d-flex">
                <div class="mr-1">
                    <img src="/storage/assets/profile_pic/${data[i].user.photo}" class="img-fluid rounded-circle" style="max-width: 25px;" alt="profile-picture">
                </div>
                <div>
                    <p class='m-0'><strong>${data[i].user.username}</strong></p>
                    <p>${data[i].body}</p>
                </div>
            </div>`);
        }
    }).fail((error) => {
        console.log(error);
    })
    .always(() => {
        Echo.channel(`product.${pathArray[2]}`)
            .listen('NewComment', (data) => {
                $('#comment-content')
                .prepend(`<div class="d-flex">
                <div class="mr-1">
                    <img src="/storage/assets/profile_pic/${data.comment.user.photo}" class="img-fluid rounded-circle" style="max-width: 25px;" alt="profile-picture">
                </div>
                <div>
                    <p class='m-0'><strong>${data.comment.user.username}</strong></p>
                    <p>${data.comment.body}</p>
                </div>
            </div>`);
        });
    });
}


$('#btn-comment').on('click', () => {
    
    let comment_body = $('#comment').val();

    $.ajax({
        url: `/product/${pathArray[2]}/comment`,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "post",
        dataType: "json",
        data: {
            comment: comment_body
        }
    })
    .done((data) => {
        $('#comment-content')
            .prepend(`<div class="d-flex">
            <div class="mr-1">
                <img src="/storage/assets/profile_pic/${data.user.photo}" class="img-fluid rounded-circle" style="max-width: 25px;" alt="profile-picture">
            </div>
            <div>
                <p class='m-0'><strong>${data.user.username}</strong></p>
                <p>${data.body}</p>
            </div>
        </div>`);
    })
    .fail((error) => {
        $('#comment').addClass('is-invalid');
        $('#comment-error')
        .append(`<p class='m-0 text-danger'>${error.responseJSON.errors.comment[0]}</p>`);
    })
    .always(() => {
        $('#comment').val('');
    })
})