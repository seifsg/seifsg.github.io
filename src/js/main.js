import Typed from './typed';

// vars and stuff
const times = $("#times");
const sidebar = $("#sidenav"); //who cares how it is named
const main = $("main");
const hireMe = $("#hireme");

times.on('click', toggleSideBar);

$(document).ready(function () {

    var typed = new Typed(".hero-text", {
        strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
        typeSpeed: 100,
        backSpeed: 30,
        onBegin: (self) => { // i made that :)
            console.log('Hello there');
            console.log(self);
        }
    });

    $('.video-container video').addClass('animated fadeIn');

    $('[data-toggle="tooltip"]').tooltip();

    $(main).fullpage({
        scrollOverflow: true,
        lazyLoad: true
    });

});



function toggleSideBar() {

    console.log('hi');
    if (sidebar.attr('data-state') == undefined) {
        sidebar.attr('data-state', 'closed');
    }

    if (sidebar.attr('data-state') == 'closed') {
        // opening
        sidebar.css('margin-left', '0');
        main.css('padding-left', '240px');

        // dat jucy hire me action
        hireMe.css('color', "#fff");
        setTimeout(() => hireMe.addClass('animated flash'), 1000);
        setTimeout(() => hireMe.css('color', "#ccc"), 1500);

        sidebar.attr('data-state', 'open');
    } else {
        //closing
        sidebar.css('margin-left', '-240px');
        main.css('padding-left', '0');

        hireMe.removeClass('animated flash');

        sidebar.attr('data-state', 'closed');
    }

}