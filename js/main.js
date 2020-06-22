// JS Aotearoa

$(document).ready(function () {

    // Menu
    $(".menu").click(function () {
        $(".links").toggleClass("open");
    });

    $(window).scroll(function () {
        $(".links").removeClass("open");
        event.preventDefault();
    });

    // Parallax

    $('.parallax-window').parallax({

    });

});