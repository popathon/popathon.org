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

	/***************
	* = Menu hover *
	***************/
	jQuery(document).ready(function ($) {
		//Cache some variables
		var menu_item = $('.nav').find('li');
		
		menu_item.hover(
			function(e) {
				var text = $(this).find('.text');
				var left_pos = text.offset().left - $('.nav').offset().left + 15;
				var el_width = text.width();
				
				var hover_bar = $('<div class="special-active-menu active-menu"></div>')
					.css('left', left_pos)
					.css('width', el_width)
					.attr('id', 'special-active-menu-' + $(this).data('slide') );
				
				$('.active-menu').after( hover_bar );
			},
			function(e) {
				$('.special-active-menu').remove();
			}
		);
	});

	/// BIND MENU BAR ANIMATIONS TO SECTIONS
	$("div[data-slide]").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	    var li;
	    if (visiblePartY == 'top') {
	      // top part of element is visible
	      slideIdx = parseInt($(this).data("slide"),10) -1;
	      li = $('.nav > li')[slideIdx];
	      menu_focus(li, slideIdx);
	    } else if (visiblePartY == 'bottom') {
	      // bottom part of element is visible
	      slideIdx = parseInt($(this).data("slide"),10) -1;
	      li = $('.nav > li')[slideIdx];
	      menu_focus(li, slideIdx);
	    } else {
	      // whole part of element is visible
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});

	// menu bar focus indicator
	function menu_focus( element, i ) {
		// $('.nav > li').removeClass('active');
		// $(element).addClass('active');
		
		var menu_item = $(element);
		var text = menu_item.find('.text');
		var left_pos = text.offset().left - $('.nav').offset().left + 15;
		var el_width = text.width();

		$('.active-menu').not('.special-active-menu').stop(false, false).animate(
			{
				left: left_pos,
				width: el_width
			},
			1000,
			'swing'
		);
	}
})(jQuery);