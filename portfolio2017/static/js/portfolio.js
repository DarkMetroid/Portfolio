jQuery(document).ready(function() {
	$.fn.redraw = function(){
	  $(this).each(function(){
	    var redraw = this.offsetHeight;
	  });
	};
	var scrollTop = $(window).scrollTop();

	function scrollToTop() { 

		//If the first element, add 1 to the scrollPos so the menu doesn't unstick.
		$('html, body').animate({
			scrollTop: $(".slide1").offset().top
		}, 2000);
	};


	$(".upArrow").click(scrollToTop);

	

});


