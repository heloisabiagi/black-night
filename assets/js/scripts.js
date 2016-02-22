blackNight.animations = (function() {

	function bindEvents(){
		new WOW({
        	mobile: blackNight.mobileAnimations
      	}).init();
	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.animations.init();
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
blackNight.contactForm = (function() {

	function testEmpty(id, field, value) {
		if(value == "") {
			if(!$("#"+id).closest(".form-group").hasClass("has-error")) {
				$("#"+id).closest(".form-group").addClass("has-error");
			}

			return "<p>" + blackNight.contactField + " " + field + " " + blackNight.contactIsEmpty + "</p>";
		} else {
			if(id=="contact-email") { 
				return testEmail(id, field, value);
			} else {
				return "";
			}
		}
	}

	function testEmail(id, field, value) {
		if(value.indexOf("@") == -1) {
	
			if(!$("#"+id).closest(".form-group").hasClass("has-error")) {
				$("#"+id).closest(".form-group").addClass("has-error");
			}

			return "<p>" + blackNight.contactNotValidEmail + "</p>";
		} else {
			$("#"+id).closest(".form-group").removeClass("has-error");
			return "";
		}
	}

	function sendMail(formData){
		$.ajax({
			type: "POST", 
			url: ('assets/inc/mailer.php'), 
			data: formData, 
			success: function(msg){
				if($(".message-box").hasClass("alert")) {
					$(".message-box").removeClass("alert-danger").addClass("alert-success");
				} else {
					$(".message-box").addClass("alert alert-success");
				}
				$(".form-group").removeClass("has-error");
				$(".message-box").html(blackNight.contactMessageSent);
				$("#contact-form").trigger("reset");
			},
			error: function(msg) {
				if(!$(".message-box").hasClass("alert")) {
					$(".message-box").addClass("alert alert-danger");
				}

				$(".message-box").html(blackNight.contactMessageNotSent);
			} 

		});
	}

	function formValidate(){
		var form = $("#contact-form");
		var formData = form.serialize();
		var name = $('input[name="contact_name"]').val();
		var email = $('input[name="contact_email"]').val();
		var message = $('textarea[name="contact_message"]').val();
		var errorChecker = "";

		errorChecker += testEmpty("contact-name", "name", name);
		errorChecker += testEmpty("contact-email","email", email);
		errorChecker += testEmpty("contact-message","message", message);

		if(errorChecker =="") {
			$(".message-box").html("");
			sendMail(formData);

		} else {
			$(".message-box").addClass("alert alert-danger").html(errorChecker);
		}

	}

	function bindEvents(){
		$("#contact-form").on("submit", function(e){
			e.preventDefault();
			formValidate();
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.contactForm.init();
blackNight.magnificPopupCustom = (function() {

	function magnificPopupNormal(){
		$(".popup-normal").magnificPopup({
		  type: 'image',
		  tLoading: blackNight.popupLoadingMessage + ' #%curr%...',
		  closeOnBgClick: false,
		  fixedContentPos: true,
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
				arrowMarkup: '<button title="%title%" type="button" class="btn-flat btn-nav arrow-%dir% mfp-arrow mfp-arrow-%dir%"><span class="icon-holder"><span class="icon nav-icon"><i class="glyphicon glyphicon-menu-%dir%" aria-hidden="true"></i></span></span></button>',
				tPrev: blackNight.popupPrevMessage, 
			  	tNext: blackNight.popupNextMessage, 
			  	tCounter: '<span class="mfp-counter">%curr% '+ blackNight.popupCounterMessage +' %total%</span>' 
			},
		  callbacks: {
		    beforeOpen: function() {
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		       this.st.mainClass = this.st.el.attr('data-effect');

		       $(".arrow-right .icon-holder, .arrow-right .icon, .arrow-right .glyphicon").on("click", function(e){
					e.preventDefault();
					magnificPopup.next();
				});

				$(".arrow-left .icon-holder, .arrow-left .icon, .arrow-left .glyphicon").on("click", function(e){
					e.preventDefault();
					magnificPopup.prev();
				});
		    },
			 resize: function() {
			    $(".mfp-img").each(function(){
			    	var bottomBar = $(this).closest(".mfp-content").find(".mfp-bottom-bar");
			    	$(this).css({ maxHeight: $(window).height() - bottomBar.height() });
			    });
			 },
			 imageLoadComplete: function() {
			    $(".mfp-img").each(function(){
			    	var bottomBar = $(this).closest(".mfp-content").find(".mfp-bottom-bar");
			    	$(this).css({ maxHeight: $(window).height() - bottomBar.height() });
			    });
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

blackNight.magnificPopupCustom .init();
blackNight.navbarHighlightItem = (function() {


	function highlightItem() {
		$("section").each(function(){
            var value = $(this).attr("id");
            var start = $(this).offset().top - $("#navigation-top").height();
            var end = start + $(this).height();

            var scrollTop = $(window).scrollTop();
            if(scrollTop >= start) {
                $("#main-nav a").not("a." + value).removeClass("active");
                $("#main-nav a." + value).addClass("active");
            }

            if(scrollTop > end) {
                $("#main-nav a." + value).removeClass("active");
            }
        });

	}

	function bindEvents(){
		$(window).scroll(function(){
            highlightItem();
        });

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.navbarHighlightItem.init(); 
blackNight.navbarShrink = (function() {

	var navbar = $("[data-behavior='navShrink']");
	var scrollAmount = "100";

	function manageHeaderScrolling(scrolledTop) {
		if(scrolledTop > scrollAmount) {
			navbar.addClass("scrolled");
		} else if(scrolledTop < scrollAmount) {
			navbar.removeClass("scrolled");
		}
	}

	function bindEvents(){
		$(window).on("scroll", function(){
			var scrolledTop = $(window).scrollTop();
			manageHeaderScrolling(scrolledTop);
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.navbarShrink.init();
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
blackNight.preloader = (function() {

	function bindEvents(){
		$(window).load(function(){
			$("#preloader").animate({opacity: 0}, 500, function(){
				$("#preloader").remove();
			});
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.preloader.init();
blackNight.scrollNavigation = (function() {
	var links = $("[data-behavior='scrollNavLink']");


	function scrollToSection(link) {
		var findTarget = link.attr("href") || link.attr("data-location"); 
		var target = findTarget.split("#").pop();
		var elToScroll = $("#" + target);
		if(target) {
			$.scrollTo(elToScroll, 400, {offset: -50});
		}
	}


	function bindEvents(){
		links.on("click", function(){
			var link = $(this);
			scrollToSection(link);
			return false;
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.scrollNavigation.init();
blackNight.userCustoms = (function() {

	function bindEvents(){
		/**
		 *
		 * You can insert customized code right here
		 */

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.userCustoms.init();