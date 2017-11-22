

$(document).ready(function(){

    $(".button-collapse").sideNav({
        menuWidth: 190, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $("#love").addClass('underlined');
    $("#bigHeart").addClass('red-text').css('text-shadow','1px 1px 5px #fff');

});