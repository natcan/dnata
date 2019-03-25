function vh(v) {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (v * h) / 100;
}

$(document).ready(function() {
	if($(window).scrollTop() > vh(100)) {
		$(".section__menu").addClass("main_menu");
		$("main").addClass("main__on__menu");
	}

	$(".header__background__list").slick({
		autoplay: true,
		arrows: false,
		fade: true,
		speed: 500
	});

	var altoScroll = window.height;
	$(window).scroll(function() {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > vh(100)) {
			$(".section__menu").addClass("main_menu");
			$("main").addClass("main__on__menu");
		} else {
			$(".section__menu").removeClass("main_menu");
			$("main").removeClass("main__on__menu");
		}
	});

	$(".go_down i").click(function() {
		$("html, body").animate({
			scrollTop: vh(100)
		}, 400);
	});

	$(".values").slider({
		min: 0,
		max: 100,
		value: 50,
		slide: function(e, ui) {
			var opacity = ui.value;
			$(".header__background__over").css("opacity", (opacity / 100));
			$(".values_value").html(opacity + "%");
		}
	});
});