;(function(){
	// enable local scrollTo for every internal link
	$.localScroll();

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	/// scroll into view elements
	// attention seeking upcomming events button
	$('#button-upcoming').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	    if (visiblePartY == 'top') {
	      // top part of element is visible
	    } else if (visiblePartY == 'bottom') {
	      // bottom part of element is visible
	    } else {
	      // whole part of element is visible
	      $('#button-upcoming').addClass('animated tada');
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});
})(jQuery);