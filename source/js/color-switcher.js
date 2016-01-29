blackNight.colorSwitcher = (function() {
	var element = $(".color-switcher");
	var label = $(".switcher-label");


	function switchTheme(color){
		$("link").each(function(){
			var HREF = $(this).attr("href").split("/").pop();

			if(HREF.indexOf("style-") > -1) {
				$(this).attr("href", "assets/style/style-" + color + ".min.css");
			}
		});
	}

	function bindEvents(){

		label.on("click", function(){
			element.toggleClass("open");
		});

		$(".color-list li").on("click", function(){
			var color = $(this).find(".color-sample").attr("data-color");
			switchTheme(color);
		});


	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.colorSwitcher.init();