blackNight.carousel = (function() {

	function triggerCarousel(){
		$(".owl-carousel").owlCarousel({
	      autoPlay: 3000,
	      navigation: true,
	      navigationText: [
	      '<button type="button" class="btn-flat btn-nav arrow-left"><span class="icon-holder"><span class="icon nav-icon"><i class="glyphicon glyphicon-menu-left" aria-hidden="true"></i></span></span></button>',
	      '<button type="button" class="btn-flat btn-nav arrow-right"><span class="icon-holder"><span class="icon nav-icon"><i class="glyphicon glyphicon-menu-right" aria-hidden="true"></i></span></span></button>'
	      ],
	      items : blackNight.carouselItems,
	      itemsDesktop : [1180, blackNight.carouselItemsDesktop],
	      itemsDesktopSmall : [960, blackNight.carouselItemsDesktopSmall],
	      itemsTablet : [768, blackNight.carouselItemsTablet],
	      itemsMobile : [480, blackNight.carouselItemsMobile]

	  });
	}

	function bindEvents(){
		triggerCarousel();

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.carousel.init();