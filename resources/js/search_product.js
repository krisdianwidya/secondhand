$(document).ready(function(){
    category = (selected_category) => {
        $.get( "/search?category=" + selected_category, (data) => {
            $('#products-container').html(data);
          });
    }

    $('#search').on('keyup', () =>{
        $.get( "/search?keyword=" + $('#search').val(), (data) => {
            $('#products-container').html(data);
          });
    });
});