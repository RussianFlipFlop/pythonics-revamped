
var percent_snap = $(height_track).height() / 100;
  $('.snap2').css('margin-top', (percent_snap*6)+'px');
  $('.snap3').css('margin-top', (percent_snap*13)+'px');
  $('.snap4').css('margin-top', (percent_snap*19.5)+'px');
  $('.snap5').css('margin-top', (percent_snap*26)+'px');
  $('.snap6').css('margin-top', (percent_snap*33)+'px');
  $('.snap7').css('margin-top', (percent_snap*39)+'px');
  $('.snap8').css('margin-top', (percent_snap*46)+'px');
  $('.snap9').css('margin-top', (percent_snap*53)+'px');
  $('.snap10').css('margin-top', (percent_snap*59)+'px');
  $('.snap11').css('margin-top', (percent_snap*66)+'px');

$(window).on('resize', function(){
	var percent_snap = $(height_track).height() / 100;
  $('.snap2').css('margin-top', (percent_snap*6)+'px');
  $('.snap3').css('margin-top', (percent_snap*13)+'px');
  $('.snap4').css('margin-top', (percent_snap*19.5)+'px');
  $('.snap5').css('margin-top', (percent_snap*26)+'px');
  $('.snap6').css('margin-top', (percent_snap*33)+'px');
  $('.snap7').css('margin-top', (percent_snap*39)+'px');
  $('.snap8').css('margin-top', (percent_snap*46)+'px');
  $('.snap9').css('margin-top', (percent_snap*53)+'px');
  $('.snap10').css('margin-top', (percent_snap*59)+'px');
  $('.snap11').css('margin-top', (percent_snap*66)+'px');
});
  
var timeout_wait = 1000;
$("#lsn1-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap").offset().top},
        'slow');
   setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});
  
$("#lsn2-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap2").offset().top},
        'slow');
     setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
        
});

$("#prct1-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap3").offset().top},
        'slow');
     setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn3-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap4").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#prct2-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap5").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn4-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap6").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#prct3-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap7").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn5-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap8").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn6-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap9").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn7-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap10").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$("#lsn8-b").click(function() {
    $('html,body').animate({
        scrollTop: $(".snap11").offset().top},
        'slow');
    setTimeout(function() {
     $('#course-div').hide().show(0);
    }, timeout_wait);
});

$(document).ready( function() {
    $("#border-animated").hide(); //hide your div initially
    var top1Div = $("#snap").offset().top;
    var top2Div = $("#snap2").offset().top;
    var top3Div = $("#snap3").offset().top;
    var top4Div = $("#snap4").offset().top;
    var top5Div = $("#snap5").offset().top;
    var top6Div = $("#snap6").offset().top;
    var top7Div = $("#snap7").offset().top;
    var top8Div = $("#snap8").offset().top;
    var top9Div = $("#snap9").offset().top;
    var top10Div = $("#snap10").offset().top;
    var top11Div = $("#snap11").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > (top1Div - 10) && $(window).scrollTop() < (top1Div + 10)) { //scrolled past the other div?
            $("#border-animated").show(); //reached the desired point -- show div
        } else if ($(window).scrollTop() > (top2Div - 10) && $(window).scrollTop() < (top2Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top3Div - 10) && $(window).scrollTop() < (top3Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top4Div - 10) && $(window).scrollTop() < (top4Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top5Div - 10) && $(window).scrollTop() < (top5Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top6Div - 10) && $(window).scrollTop() < (top6Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top7Div - 10) && $(window).scrollTop() < (top7Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top8Div - 10) && $(window).scrollTop() < (top8Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top9Div - 10) && $(window).scrollTop() < (top9Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top10Div - 10) && $(window).scrollTop() < (top10Div + 10)) {
        		$("#border-animated").show();
        } else if ($(window).scrollTop() > (top11Div - 10) && $(window).scrollTop() < (top11Div + 10)) {
        		$("#border-animated").show();
        }
        else {
          	$("#border-animated").hide();
        			}
    });
});
