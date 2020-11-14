let pathArray = window.location.pathname.split('/');

getComments();

function getComments() {
    $.get(`/product/${pathArray[2]}/comments`)
    .done((data) => {
        for(let i=0; i<data.length; i++){
            $('#comment-content')
            .append(`<p class='m-0'>${data[i].user.username}</p> <p>${data[i].body}</p>`);
        }
    }).fail((error) => {
        console.log(error);
    });
}


$('#btn-comment').on('click', () => {
    $('#comment-error')
        .html(`<p class='m-0 text-danger'></p>`);
    let comment_body = $('#comment').val();

    // $.post(`/product/${pathArray[2]}/comments`, {_token: '{!! csrf_token() !!}', comment: comment_body})

    $.ajax({
        url: `/product/${pathArray[2]}/comments`,
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
            .prepend(`<p class='m-0'>${data.user.username}</p> <p>${data.body}</p>`);        
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