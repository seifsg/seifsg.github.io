//callback function to convert
function parseHtml(c, log) {
    log.html(c.makeHtml(log.text()));
}

//Initiate Markup converter
var converter = new showdown.Converter();
//Store object
var log1 = $("#doc_log1");
//Load data from github
log1.load("https://urlreq.appspot.com/req?method=GET&url=https://raw.githubusercontent.com/seifsg/100-days-of-code/master/log.md", function () {
    parseHtml(converter, log1)
});

GitHubCalendar(".calendar", "seifsg");

$("#jtabs").tabs();

$(document).ready(function(){
    $("#jtabs").show();
});