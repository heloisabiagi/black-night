blackNight.parallax = (function() {

	function parallax(){
		 var scrollTop = $(window).scrollTop();

		$(".text-box").each(function(){
			// alert("Oi");
		});
	}

	function bindEvents() {
		$(window).on("scroll", function(){
			parallax();
		});
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

// blackNight.parallax.init();