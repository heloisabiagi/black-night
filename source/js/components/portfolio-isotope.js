blackNight.portfolioIsotope = (function() {
	var container = $('.portfolio-wrapper');
	var filters = $(".portfolio-filters");

	function startIsotope() {
		  container.isotope({
		    itemSelector: '.portfolio-item',
		    layoutMode: blackNight.portfolioLayout,
		    getSortData: {
		      category: '[data-category]'
		    }
		  });
	}

	function filtersIsotope(){
	  filters.on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    container.isotope({ filter: filterValue });
	  });
	}

	function bindEvents(){
		$(window).load(function() {
			$(".portfolio-filters").addClass("active");	
		    startIsotope();	
			filtersIsotope();
		});
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.portfolioIsotope.init();