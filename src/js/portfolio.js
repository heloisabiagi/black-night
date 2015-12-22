blackNight.portfolio = (function() {
	var container = $('.isotope');
	var filters = $("#portfolio-filters");

	function startIsotope() {
		 // init Isotope
		  container.isotope({
		    itemSelector: '.element-item',
		    layoutMode: blackNight.portfolioLayout,
		    getSortData: {
		      category: '[data-category]'
		    }
		  });
	}

	function filtersIsotope(){
		// bind filter button click
	  filters.on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    container.isotope({ filter: filterValue });
	  });
	}

	function bindEvents(){
		startIsotope();	
		filtersIsotope();

		container.magnificPopup({
		  delegate: 'a.popup-normal', // child items selector, by clicking on it popup will open
		  type: 'image'
		  // other options
		});
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.portfolio.init();