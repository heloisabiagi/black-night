blackNight.navbarShrink = (function() {

	var navbar = $("[data-behavior='navShrink']");
	var scrollAmount = "100";

	function manageHeaderScrolling(scrolledTop) {
		if(scrolledTop > scrollAmount) {
			navbar.addClass("scrolled");
		} else if(scrolledTop < scrollAmount) {
			navbar.removeClass("scrolled");
		}
	}

	function bindEvents(){
		$(window).on("scroll", function(){
			var scrolledTop = $(window).scrollTop();
			manageHeaderScrolling(scrolledTop);
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.navbarShrink.init();