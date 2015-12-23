blackNight.portfolioIsotope = (function() {
	var container = $('.isotope');
	var filters = $("#portfolio-filters");

	function startIsotope() {
		  container.isotope({
		    itemSelector: '.element-item',
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
		startIsotope();	
		filtersIsotope();
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.portfolioIsotope.init();