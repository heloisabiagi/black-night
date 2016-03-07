blackNight.documentation = (function() {

	var navbar = $(".table-of-contents");
	var scrollAmount = navbar.offset().top;

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

blackNight.documentation.init();