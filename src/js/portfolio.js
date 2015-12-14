blackNight.portfolio = (function() {
	var container = $('.isotope');
	var filters = $("#portfolio-filters");

	function startIsotope() {
		 // init Isotope
		  container.isotope({
		    itemSelector: '.element-item',
		    layoutMode: 'fitRows',
		    getSortData: {
		      category: '[data-category]'
		    }
		  });
	}

	function filtersIsotope(){
		// bind filter button click
	  filters.on( 'click', 'button', function() {
	  	console.log("Bla")
	    var filterValue = $(this).attr('data-filter');
	    // use filterFn if matches value
	    // filterValue = filterFns[ filterValue ] || filterValue;
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

blackNight.portfolio.init();