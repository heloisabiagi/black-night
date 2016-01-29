blackNight.testimonials = (function() {

	function testimonialsCarousel(){
		$("#owl-testimonials").owlCarousel({
	      autoPlay: 3000,
	      navigation: true,
	      navigationText: [
	      '<button type="button" class="btn-flat btn-nav arrow-left"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>',
	      '<button type="button" class="btn-flat btn-nav arrow-right"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>'
	      ],
	      items : 1,
	      itemsDesktop : [1180,1],
	      itemsDesktopSmall : [960,1],
	      itemsTablet : [768,1],
	      itemsMobile : [480,1]

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