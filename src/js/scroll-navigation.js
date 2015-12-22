blackNight.scrollNavigation = (function() {
	var links = $("[data-behavior='scrollNavLink']");


	function scrollToSection(link) {
		var findTarget = link.attr("href") || link.attr("data-location"); 
		var target = findTarget.split("#").pop();
		var elToScroll = $("#" + target);
		if(target) {
			$.scrollTo(elToScroll, 400, {offset: -50});
		}
	}


	function bindEvents(){
		links.on("click", function(){
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

blackNight.scrollNavigation.init();