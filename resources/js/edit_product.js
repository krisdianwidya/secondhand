$(document).ready(() => {
    let pathArray = window.location.pathname.split('/');

    
    $.get("/product/edit/"+pathArray[2], (data) => {
        data.forEach(element => {
            for(let i=1; i < 8; i++){
                if(element.id == $('#checkbox-'+i).val()){
                    $('#checkbox-'+i).prop("checked", true);
                }
            }
        });
    });
});