// Import FilePond
import * as FilePond from 'filepond';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

let pathArray = window.location.pathname.split('/');

FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform
);

let pond = FilePond.create(document.querySelector('#photo'));

pond.setOptions({
    instantUpload: false,
    imageCropAspectRatio: 1,
    server: {
        
        process: {
            url: `/profile/picture/${pathArray[2]}/update`,
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            onload: function(){
                getProfile();
                Swal.fire(
                    'Updated!',
                    'Your profile has been updated.',
                    'success'
                )
                FilePond.destroy(document.querySelector('#photo'));
                FilePond.create(document.querySelector('#photo'))
            }
        }
        
    }
});

getProfile();

function getProfile(){
    $.get(`/profile/${pathArray[2]}/get`)
    .done((data) => {
        $('#name').val(data.name);
        $('#username').val(data.username);
        $('#email').val(data.email);
        $('#phone').val(data.phone);
        $('#birth_date').val(data.birth_date);
        $('#address').val(data.address);
        $('#pic_profile').attr('src', `/storage/assets/profile_pic/${data.photo}`);
    }).fail((error) => {
        console.log(error);
    });
}


$('#btn-save').on('click', (e) => {
    e.preventDefault();

    Swal.showLoading()

    $.ajax({
        url: `/profile/${pathArray[2]}`,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "put",
        dataType: "json",
        data: {
            name: $('#name').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            birth_date: $('#birth_date').val(),
            address: $('#address').val(),
            password: $('#password').val()
        }
    })
    .done((data) => {
        console.log(data);
        Swal.hideLoading()
        Swal.fire(
            'Updated!',
            'Your profile has been updated.',
            'success'
        )
        // $('#comment-content')
        //     .prepend(`<div><p class='m-0'>${data.user.username}</p> <p >${data.body}</p> </div>`);
    })
    .fail((error) => {
        console.log(error);
        // $('#comment').addClass('is-invalid');
        // $('#comment-error')
        // .append(`<p class='m-0 text-danger'>${error.responseJSON.errors.comment[0]}</p>`);
    })
    .always(() => {
        // $('#comment').val('');
        console.log('always');
    });
});