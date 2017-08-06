var selectedTab;

var sections = {
    actualitiesSection:{
        visible: true,
        el: $("#actualitiesSection")
    },
    servicesSection:{
        visible: false,
        el: $("#servicesSection")
    },
    storySection: {
        visible: false,
        el: $("#storySection")
    },
    usefulSection: {
        visible: false,
        el: $("#usefulSection")
    }
}

$(".nav-link").on('click',function(e){
    var section = $(this).attr('data-sec');
    console.log(section == 'undefined');
    if(section == undefined) return true;

    e.preventDefault();

    

    for(var sec in sections){
        if(sec == section){
            sections[sec].visible = true;
            sections[sec].el.show();
        }else{
            sections[sec].visible = false;
            sections[sec].el.hide();
        }
    }

})