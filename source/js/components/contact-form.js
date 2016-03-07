blackNight.contactForm = (function() {

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

	function bindEvents(){
		$("#contact-form").validate({
			rules: {
				contact_name: {
					required: true
				},
				contact_email: {
					required: true,
					email: true
				},
				contact_message: {
					required: true
				}
			},
			messages: {
				contact_name: { 
					required: blackNight.contactFieldNameEmpty 
				},
				contact_email: { 
					required: blackNight.contactFieldEmailEmpty,
					email: blackNight.contactInvalidEmail
				},
				contact_message: {
					required: blackNight.contactFieldMessageEmpty
				}
			},
			errorClass: "has-error",
			errorContainer: ".message-box",
			errorPlacement: function(error, element) {
				$(".message-box").show().addClass("alert alert-danger");
		    	error.appendTo(".message-box");
		  	},
			submitHandler: function(form){
				var formData = $(form).serialize();
				sendMail(formData);
				return false;
			}
		});

	}

	return {
		init: function(){
			bindEvents();	
		}
	}

})();

blackNight.contactForm.init();