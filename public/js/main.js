/*function startTime() {
    var today = new Date();
    console.log(today.getDay());
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 10000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}*/


$(function () {
    //startTime();
    moment().locale('sv');
    console.log(moment().locale('sv').format('LT'));
    console.log(moment().locale('sv').format('dddd'));
    $("#time").text(moment().locale('sv').format('LT'));
    $("#day").text(moment().locale('sv').format('dddd'));
    $("#date").text(moment().locale('sv').format('LL'));
});
