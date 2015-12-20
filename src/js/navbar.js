blackNight.navbar = (function() {

	var navbar = $("[data-behavior='navShrink']");
	var scrollAmount = blackNight.scrollToShrink;
	var links = $(".navbar-right a");

	function manageHeaderScrolling(scrolledTop) {
		if(scrolledTop > scrollAmount) {
			navbar.addClass("scrolled");
		} else if(scrolledTop < scrollAmount) {
			navbar.removeClass("scrolled");
		}
	}

	function scrollToSection(link) {
		var target = link.attr("href").split("#").pop();
		var elToScroll = $("#" + target);
		if(target) {
			$.scrollTo(elToScroll, 400, {offset: -50});
		}
	}


	function bindEvents(){
		$(window).on("scroll", function(){
			var scrolledTop = $(window).scrollTop();
			manageHeaderScrolling(scrolledTop);
		});

		links.not(".dropdown > .dropdown-toggle").on("click", function(){
			var link = $(this);
			scrollToSection(link);
			return false;
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.navbar.init();