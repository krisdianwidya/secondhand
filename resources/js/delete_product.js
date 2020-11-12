$(document).ready(() => {
    let pathArray = window.location.pathname.split('/');

    $('#delete-product').on('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                console.log("ok");

                $.ajax({
                    url: "/products/" + pathArray[2],
                    method: "DELETE",
                    dataType: "json",
                    data: {
                        _token: $('meta[name="csrf-token"]').attr('content')
                    },
                    success: (data) => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )        
                    },
                    error: (data) => {
                        console.log(data);
                    }
                });
                
            }
          })
    });
});