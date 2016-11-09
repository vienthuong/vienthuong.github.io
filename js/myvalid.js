$( document ).ready( function () {
		jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
		    phone_number = phone_number.replace(/\s+/g, "");
		    return this.optional(element) || phone_number.length > 9 && 
		    phone_number.match(/^\+?\d{0,12}\d$/);
		}, "Please specify a valid phone number");
			$("#contact-form").validate({
				rules: {
					myInputName: "required",
					myTextArea: "required",
					myInputEmail: {
						required: true,
						email: true
					},
					myInputPhone:{
						required:true,
				        phoneUS:true,
				    }
				},
				messages: {
					myInputName: "Please enter your name",
					myTextArea: "Please enter something",
					myInputEmail: {
						required: "Please enter your email",
						email: "This is not a valid email"
					},
					myInputPhone:{
						required:"Please enter your phonenumber",
				        phoneUS: "Invalid phonenumber", 
				    }
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );
					error.insertBefore( element );
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents(".form-group").addClass( "has-danger" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents(".form-group").addClass( "has-success" ).removeClass( "has-danger" );
				}
			} );
		});