$(document).ready(() => {
    let pathArray = window.location.pathname.split('/');

    if (pathArray[3] == "edit") {
        $.get("/product/edit/" + pathArray[2])
            .done((data) => {
                // toggle switch checkbox
                if (data.sold == 1) {
                    $('#sold_toggle').prop("checked", true);
                }

                // categories checkbox 
                data.categories.forEach(element => {
                    for (let i = 1; i < 8; i++) {
                        if (element.id == $('#checkbox-' + i).val()) {
                            $('#checkbox-' + i).prop("checked", true);
                        }
                    }
                });
            }).fail((error) => {
                console.log(error);
            });
    } else {
        console.log('not found');
    }


    $('#sold_toggle').on('click', () => {
        if ($('#sold_toggle').val() == 0) {
            $('#sold_toggle').val(1);
        } else {
            $('#sold_toggle').val(0);
        }
    });

    let i = 1;

    $('#btn-add').on('click', (event) => {
        event.preventDefault();
        $('.input-increment').after($('.img-fil').html());
        i++;
    });

    $('#btn-min').on('click', (event) => {
        event.preventDefault();
        if (i > 1) {
            $(`.file-input div:nth-child(${i})`).remove();
            i--;
        }
    })
});

