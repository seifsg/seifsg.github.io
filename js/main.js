$(document).ready(function () {

    $(".button-collapse").sideNav({
        menuWidth: 190,
        edge: 'left',
        closeOnClick: true
    });

});

$("#contact ul li a").on('mouseenter', function () {
    $(this).addClass("pulse").addClass("purple").removeClass("cyan");
});

$("#contact ul li a").on('mouseleave', function () {
    $(this).removeClass("pulse").removeClass("purple").addClass("cyan");
});