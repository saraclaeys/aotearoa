// JS Aotearoa

// Menu
$(document).ready(function () {
    $(".menu").click(function () {
        $(".links").toggleClass("open");
    });

    $(window).scroll(function () {
        $(".links").removeClass("open");
        event.preventDefault();
    });

});