blackNight.navbar = (function() {

	var el = $("#navigation-top");
	var scrollAmount = "100";

	function manageHeaderScrolling(scrolledTop) {
		if(scrolledTop > scrollAmount) {
			el.addClass("scrolled");
		} else if(scrolledTop < scrollAmount) {
			el.removeClass("scrolled");
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

blackNight.navbar.init();