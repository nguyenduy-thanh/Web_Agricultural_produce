$(document).ready(function () {
    $('.heart_product , .card_product').click(function () {
        var url = $(this).attr('data-url');
        var dataToSend = {
            key1: 'value1',
            key2: 'value2',
        };

        $.post(url, dataToSend, function (response) {
            console.log(response);
        }).fail(function (xhr, status, error) {
            console.log("Error: " + error);
        });
    });

    $('.heart_product , .card_product').click(function () {
        if ($(this).hasClass('fa-regular')) {
            $(this).removeClass('fa-regular').removeClass('text-black').addClass('fa-solid text-danger');
        } else {
            $(this).removeClass('fa-solid').removeClass('text-danger').addClass('fa-regular text-black');
        }
    });

});