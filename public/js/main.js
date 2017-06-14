function startTime() {
    moment().locale('sv');
    $("#time").text(moment().locale('sv').format('LT'));
    $("#day").text(moment().locale('sv').format('dddd'));
    $("#date").text(moment().locale('sv').format('LL'));
    var t = setTimeout(startTime, 10000);
}

$(function () {
    startTime();

});
