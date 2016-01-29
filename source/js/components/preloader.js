blackNight.preloader = (function() {

	function bindEvents(){
		$(window).load(function(){
			$("#preloader").animate({opacity: 0}, 500, function(){
				$("#preloader").remove();
			});
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.preloader.init();