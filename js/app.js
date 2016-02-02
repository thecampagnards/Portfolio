$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			
			$(function(){
				$("head").append(
				$(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"css/component-form.css"})
				);
			});

			// Set the message text.
			$(formMessages).text(response);
			$(formMessages).css('color','#2ecc71');
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			
			$(function(){
			$("head").append(
				$(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"css/component-formfalse.css"})
				);
			});
			
			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text("Oops! Une erreur est survenue lors de l'envoie de votre message");
			}
			$(formMessages).css('color','#ff675f');
		});

	});

});
