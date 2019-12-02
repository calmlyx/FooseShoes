$(function () {
    var sWidth = $("#slider_name").width();
    var len = $("#slider_name .silder_panel").length;
    var index = 0;
    var picTimer;
    $("#slider_name .silder_nav li").css({"opacity": "0.6", "filter": "alpha(opacity=60)"}).mouseenter(function () {
        index = $("#slider_name .silder_nav li").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $("#slider_name .silder_con").css("width", sWidth * (len));
    // mouse
    $("#slider_name").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 10000000);
    }).trigger("mouseleave");

    // showPics
    function showPics(index) {
        var nowLeft = -index * sWidth;
        $("#slider_name .silder_con").stop(true, false).animate({"left": nowLeft}, 1400);
        $("#slider_name .silder_nav li").removeClass("current").eq(index).addClass("current");
        $("#slider_name .silder_nav li").stop(true, false).animate({"opacity": "0.5"}, 1400).eq(index).stop(true, false).animate({"opacity": "1"}, 1400);
    }
});
