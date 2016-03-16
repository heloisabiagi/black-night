blackNight.featureChecker = (function() {

	function hoverCheck(){
		var deviceAgent = navigator.userAgent.toLowerCase();
		var isTouchDevice = Modernizr.touch || 
			(deviceAgent.match(/(iphone|ipod|ipad)/) ||
			deviceAgent.match(/(android)/)  || 
			deviceAgent.match(/(iemobile)/) || 
			deviceAgent.match(/iphone/i) || 
			deviceAgent.match(/ipad/i) || 
			deviceAgent.match(/ipod/i) || 
			deviceAgent.match(/blackberry/i) || 
			deviceAgent.match(/bada/i));

		if (!isTouchDevice) {
			$("body").addClass("has-hover");
		} 	

	}

	function selectCustom(){
		if(Modernizr.appearance && Modernizr.bgpositionshorthand) {
			$("select").addClass("custom");
		}
	}

	function bindEvents(){
		hoverCheck();
		selectCustom();
	}

	return {
		init: function(){
			bindEvents();		
		}
	}

})();

blackNight.featureChecker.init();