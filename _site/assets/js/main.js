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

	/*$(".go_down i").click(function() {
		$("html, body").animate({
			scrollTop: vh(100)
		}, 400);
	});*/

	$(document).on("click", ".menu__icon i.icon-icon-menu", function() {
		$(this).attr("class", "icon-icons8-cancel");
		$(".menu__nav").addClass("menu__active");
	});

	$(document).on("click", ".menu__icon i.icon-icons8-cancel", function() {
		$(this).attr("class", "icon-icon-menu");
		$(".menu__nav").removeClass("menu__active");
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

	/*var arg_tweets = {
		"profile": {"screenName": 'allasicanales'},
		"domId": 'footer__twitter_feed',
		"maxTweets": 4,
		"enableLinks": true,
		"showUser": true,
		"showTime": true,
		"showImages": true,
		"showRetweet": true,
		"lang": 'en',
	};*/
});

var arg_tweets = {
	"profile" : {"screenName": "allasicanales"},
	"dataOnly" : true,
	"customCallback" : displayTweets,
	"enableLinks": true,
	"maxTweets": 4,
	"showImages": true,
}

twitterFetcher.fetch(arg_tweets);

function displayTweets(tweets) {
	var element = document.getElementById("footer__twitter_feed");
	var html = "<div class='twitter__feed__header'><span>Tweets</span> by <a href='https://twitter.com/allasicanales'>‎@allasicanales</a></div>";
	html += '<ul class="twitter_feed">';
	for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
		var tweetObject = tweets[i];

		var author_name = tweetObject.author_data.name;
		var _rt = "<div class='tweet__retweeted'><img src='/assets/img/twitter/retweeted.png'><span>Nataly Allasi Canales Retweeted</span></div>";
		var retweeted = (author_name.indexOf("Nataly") == -1? _rt : "");

		html += "<li>"
			+ "<div class='tweet__wrapper'>"

			+ retweeted
			
			+ "<div class='tweet__user'>"
			+ tweetObject.author
			+ "</div>" //tweets_user

			+ "<div class='tweet__content'>"
			+ "<div class='tweet__content__tweet'>"
			+ tweetObject.tweet
			+ "</div>"; //tweet__content__tweet
		
		if(tweetObject.images) {
			html += "<div class='tweet__content__media'>";
			html += "<div class='tweet__content__media__wrapper'>";
			var total_img = tweetObject.images.length;

			total_img = (total_img > 2? 2 : total_img);
			var img_class = "tweet_media-1";
			if(total_img == 2) img_class = "tweet_media-2";

			for(var j = 0; j < total_img; ++j) {
				html += "<div class='tweet__content__media__img " + img_class + "'><img src='" + tweetObject.images[j] + "'/></div>";
			}

			html += "</div>"; //tweet__content__media__wrapper
			html += "</div>"; //tweet__content__media
		}

		html += "</div>" //tweet__content
			+ "<div class='tweet__date'>"
			+ "<a href='" + tweetObject.permalinkURL + "' target='_blank'>" + tweetObject.time + "</a>"
			+ "</div>" //tweet__date

			+ "</div>" //wrapper
			+ "</a></li>";
	}
	html += '</ul>';
	element.innerHTML = html;

	$(".twitter_feed").slick({
		autoplay: true,
		arrows: false,
		speed: 1000
	});
}