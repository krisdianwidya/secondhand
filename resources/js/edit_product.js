$(document).ready(() => {
    let pathArray = window.location.pathname.split('/');
    
    if(pathArray[3] == "edit"){
        $.get("/product/edit/"+pathArray[2])
        .done((data) => {
            data.forEach(element => {
                for(let i=1; i < 8; i++){
                    if(element.id == $('#checkbox-'+i).val()){
                        $('#checkbox-'+i).prop("checked", true);
                    }
                }
            });
        }).fail((error) => {
            console.log(error);
        });
    }else{
        console.log('not found');
    } 
});