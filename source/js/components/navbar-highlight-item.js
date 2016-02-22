blackNight.navbarHighlightItem = (function() {


	function highlightItem() {
		$("section").each(function(){
            var value = $(this).attr("id");
            var start = $(this).offset().top - $("#navigation-top").height();
            var end = start + $(this).height();

            var scrollTop = $(window).scrollTop();
            if(scrollTop >= start) {
                $("#main-nav a").not("a." + value).removeClass("active");
                $("#main-nav a." + value).addClass("active");
            }

            if(scrollTop > end) {
                $("#main-nav a." + value).removeClass("active");
            }
        });

	}

	function bindEvents(){
		$(window).scroll(function(){
            highlightItem();
        });

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.navbarHighlightItem.init(); 