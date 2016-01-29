blackNight.popupSettings = (function() {

	function magnificPopupNormal(){
		$(".popup-normal").magnificPopup({
		  type: 'image',
		  tLoading: blackNight.popupLoadingMessage + ' #%curr%...',
		  image: {
          	titleSrc: function(item) {
                var _html = '<div class="databox job-data">';
                _html +=  '<h3 class="databox-title">' + item.el.attr('title') + '</h3>';
                _html += '<span class="databox-info">' +item.el.attr('data-description') + '</small>';
                _html += '</div<';

                return _html;
		  	},
		  	markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>', 
		  },
		  gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1],
				arrowMarkup: '<button title="%title%" type="button" class="btn-flat btn-nav arrow-%dir% mfp-arrow mfp-arrow-%dir%"><span class="glyphicon glyphicon-menu-%dir%" aria-hidden="true"></span></button>',
				tPrev: blackNight.popupPrevMessage, 
			  	tNext: blackNight.popupNextMessage, 
			  	tCounter: '<span class="mfp-counter">%curr% '+ blackNight.popupCounterMessage +' %total%</span>' 
			},
		  callbacks: {
		    beforeOpen: function() {
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		}
		});
	}

	function magnificPopupVideo(){
		$('.popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}

	function bindEvents(){
		magnificPopupNormal();
		magnificPopupVideo();
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.popupSettings.init();