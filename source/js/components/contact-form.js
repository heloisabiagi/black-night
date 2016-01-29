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