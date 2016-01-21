blackNight.animations = (function() {
	var elements = $("[data-animation]");


	function bindEvents(){
		new WOW().init();
		/*
		$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			var screenHeight = $(window).height();

			elements.each(function(){
				var el = $(this) ;
				var elPosition = (el.offset().top - screenHeight) + blackNight.animationGap;
				var animationType = el.attr("data-animation");

				if(scrollTop > elPosition) {
					el.addClass("animated " + animationType);
				}
					
			});
		});
		*/

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.animations.init();