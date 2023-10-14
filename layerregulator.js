
var windowHeight = $(window).height();
var height_track = document.getElementById("track-course");

$(window).scroll(function() {
	var scrollPercent = 100 * $(this).scrollTop() / ($(height_track).height());
    	console.log(scrollPercent);


    if (scrollPercent < 3) {
    	$('.lesson1-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'flex'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

		if (scrollPercent > 3 && scrollPercent < 9.9) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'flex'
        }),
        $('.lesson2-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'flex'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

		if (scrollPercent > 9.9 && scrollPercent < 16.4) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'flex'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'flex'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

		if (scrollPercent > 16.4 && scrollPercent < 23) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'flex'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'flex'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

		if (scrollPercent > 23 && scrollPercent < 29.7) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'flex'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'auto'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

    if (scrollPercent > 29.7 && scrollPercent < 36.3) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'flex'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'flex'
        });
    }

    if (scrollPercent > 36.3 && scrollPercent < 43) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'flex'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'flex'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': 'auto',
		'display': 'flex'
        });
    }

    if (scrollPercent > 43 && scrollPercent < 49.6) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'flex'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'flex'
        });
    }

    if (scrollPercent > 49.6 && scrollPercent < 56.3) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'flex'
        }),
        $('.lesson6-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'none'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'none'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

    if (scrollPercent > 56.3 && scrollPercent < 63) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'flex'
        }),
        $('.lesson7-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.lesson8-div').css({
            'z-index': '-108',
		'display': 'flex'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

    if (scrollPercent > 63 && scrollPercent < 69.6) {
    		$('.lesson1-div').css({
            'z-index': '-101',
		'display': 'none'
        }),
        $('.lesson2-div').css({
            'z-index': '-102',
		'display': 'none'
        }),
        $('.lesson3-div').css({
            'z-index': '-103',
		'display': 'none'
        }),
        $('.lesson4-div').css({
            'z-index': '-104',
		'display': 'none'
        }),
        $('.lesson5-div').css({
            'z-index': '-105',
		'display': 'none'
        }),
        $('.lesson6-div').css({
            'z-index': '-106',
		'display': 'none'
        }),
        $('.lesson7-div').css({
            'z-index': '-107',
		'display': 'flex'
        }),
        $('.lesson8-div').css({
            'z-index': 'auto',
		'display': 'flex'
        }),
        $('.practice1-div').css({
            'z-index': '-109',
		'display': 'none'
        }),
        $('.practice2-div').css({
            'z-index': '-110',
		'display': 'none'
        }),
        $('.practice3-div').css({
            'z-index': '-111',
		'display': 'none'
        });
    }

});
