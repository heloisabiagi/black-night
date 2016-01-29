blackNight.animations = (function() {

	function bindEvents(){
		new WOW().init();
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.animations.init();