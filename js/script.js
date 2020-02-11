


$(window).ready(function () {
    // menu click event
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.main-menu').addClass('active');
            $('.main-menu').fadeIn();
        }
        else {
            $('.main-menu').removeClass('active');
            $('.main-menu').fadeOut();

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


