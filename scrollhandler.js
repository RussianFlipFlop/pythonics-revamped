
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


