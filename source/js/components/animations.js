blackNight.animations = (function() {

	function bindEvents(){
		new WOW({
        	mobile: blackNight.mobileAnimations
      	}).init();
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.animations.init();