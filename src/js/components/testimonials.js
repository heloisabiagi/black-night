blackNight.testimonials = (function() {

	function testimonialsCarousel(){
		$("#owl-testimonials").owlCarousel({
	      autoPlay: 3000, //Set AutoPlay to 3 seconds
	      items : 1,
	      //itemsDesktop : [1199,3],
	     // itemsDesktopSmall : [979,3]

	  });
	}

	function bindEvents(){
		testimonialsCarousel();

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.testimonials.init();