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

    $('[data-toggle="tooltip"]').tooltip();


    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({
                'margin-top': 0,
                'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
            });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

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