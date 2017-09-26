var selectedTab;

var sections = {
    actualitiesSection: {
        visible: true,
        el: $("#actualitiesSection"),
        nav: $("[data-sec='actualitiesSection']").parent()
    },
    servicesSection: {
        visible: false,
        el: $("#servicesSection"),
        nav: $("[data-sec='servicesSection']").parent()
    },
    storySection: {
        visible: false,
        el: $("#storySection"),
        nav: $("[data-sec='storySection']").parent()
    },
    usefulSection: {
        visible: false,
        el: $("#usefulSection"),
        nav: $("[data-sec='usefulSection']").parent()
    },
    contactSection: {
        visible: false,
        el: $("#contactSection"),
        nav: $("[data-sec='contactSection']").parent()
    }
}

$(".nav-link").on('click', function (e) {
    var section = $(this).attr('data-sec');
    if (section == undefined) return true;

    e.preventDefault();

    for (var sec in sections) {
        if (sec == section) {
            sections[sec].visible = true;
            sections[sec].el.show();
            sections[sec].nav.addClass('active');
        } else {
            sections[sec].visible = false;
            sections[sec].el.hide();
            sections[sec].nav.removeClass('active');
        }
    }

});


var randomPhrase = ()=>{

    var phrases = ['Not so regular website','Be different','Always keep improving'];
    $("#phrases").text(phrases[Math.floor(Math.random()*3)]);

}

$(document).ready(()=>{
    $('[data-toggle="tooltip"]').tooltip();
    randomPhrase();
});

