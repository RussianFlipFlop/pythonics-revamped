
var windowHeight = $(window).height();
var height_track = document.getElementById("track-course");

$(window).scroll(function() {
	var scrollPercent = 100 * $(this).scrollTop() / ($(height_track).height());
    	//console.log(scrollPercent);

	var percentage_7 = ($(height_track).height() / 100) * 7;
	$('.snap2').css('margin-top', percentage_7+'px');
	console.log(percentage_7);

    if (scrollPercent < 3) {
    		$('.lesson1-div').css({
            'z-index': 'auto'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

		if (scrollPercent > 3 && scrollPercent < 9.9) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': 'auto'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

		if (scrollPercent > 9.9 && scrollPercent < 16.4) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': 'auto'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

		if (scrollPercent > 16.4 && scrollPercent < 23) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': 'auto'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

		if (scrollPercent > 23 && scrollPercent < 29.7) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': 'auto'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

    if (scrollPercent > 29.7 && scrollPercent < 36.3) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': 'auto'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

    if (scrollPercent > 36.3 && scrollPercent < 43) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': 'auto'
        });
    }

    if (scrollPercent > 43 && scrollPercent < 49.6) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': 'auto'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

    if (scrollPercent > 49.6 && scrollPercent < 56.3) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': 'auto'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

    if (scrollPercent > 56.3 && scrollPercent < 63) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': 'auto'
        }),
        $('.lesson8-div').css({
            'z-index': '-100'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

    if (scrollPercent > 63 && scrollPercent < 69.6) {
    		$('.lesson1-div').css({
            'z-index': '-100'
        }),
        $('.lesson2-div').css({
            'z-index': '-100'
        }),
        $('.lesson3-div').css({
            'z-index': '-100'
        }),
        $('.lesson4-div').css({
            'z-index': '-100'
        }),
        $('.lesson5-div').css({
            'z-index': '-100'
        }),
        $('.lesson6-div').css({
            'z-index': '-100'
        }),
        $('.lesson7-div').css({
            'z-index': '-100'
        }),
        $('.lesson8-div').css({
            'z-index': 'auto'
        }),
        $('.practice1-div').css({
            'z-index': '-100'
        }),
        $('.practice2-div').css({
            'z-index': '-100'
        }),
        $('.practice3-div').css({
            'z-index': '-100'
        });
    }

});
