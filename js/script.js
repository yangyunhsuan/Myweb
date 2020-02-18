
$(document).ready(function () {
    // menu click event
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.main-menu').addClass('active');
            $('.main-menu').fadeIn();
            // $('body').addClass('overflow-hidden');
        }
        else {
            $('.main-menu').removeClass('active');
            $('.main-menu').fadeOut();
            // $('body').removeClass('overflow-hidden');
        }
    });
});


$(window).resize(function () {
    if ($(window).outerWidth() >= 768) {
        $('.main-menu').show();
    }
    else {
        $('.main-menu').hide();
    }
});





