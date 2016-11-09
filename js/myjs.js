	$(document).ready(function(){
		$(function(){
		 
		    $(document).on( 'scroll', function(){
		 
		    	if ($(window).scrollTop() > 100) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			});
		 
			$('.back-to-top').on('click', scrollToTop);
		});
		 
		function scrollToTop() {
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $('body');
			offset = element.offset();
			offsetTop = offset.top;
			$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
		}

		});
