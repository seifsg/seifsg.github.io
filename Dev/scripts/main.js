var sectionsNames = ['actualitiesSection', 'servicesSection', 'bioSection', 'usefulSection', 'cvSection'];

//just dynamic assignments
var sections = {};
sectionsNames.map(section => {
    var nav = $(`[data-sec='${section}']`);

    sections[section] = {
        visible: false,
        el: $(`#${section}`),
        navA: nav,
        navLi: nav.parent(),
        title: ''
    };
});

//seeding required information
var pageTitleInital = 'SeifSG - Seif Sgayer - ';
sections[sectionsNames[0]].visible = true;
sections[sectionsNames[0]].title = 'Hire a Freelancer &amp; Learn from a Computer Scientist/Developer/Coder';
sections[sectionsNames[1]].title = 'Freelancer | FullStack Web Development | Software Engineering';
sections[sectionsNames[2]].title = 'Biography';
sections[sectionsNames[3]].title = 'Useful links and resources';
sections[sectionsNames[4]].title = 'Curriculum Vitae (CV)';



$(".nav-link").on('click', function (e) {
    var section = $(this).attr('data-sec');
    if (section == undefined) return true;

    e.preventDefault();

    for (var sec in sections) {
        if (sec == section) {
            sections[sec].visible = true;
            sections[sec].el.show();
            sections[sec].navLi.addClass('active');
            changeTitle(sec);
            randomPhrase();
        } else {
            sections[sec].visible = false;
            sections[sec].el.hide();
            sections[sec].navLi.removeClass('active');
        }
    }

});


var randomPhrase = () => {

    var phrases = ['Not so regular website', 'Be different', 'Always keep improving'];
    $("#phrases").text(phrases[Math.floor(Math.random() * 3)]);

}

var changeTitle = sec =>{
    $('title').text(pageTitleInital + sections[sec].title);
}

$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();
    randomPhrase();
});