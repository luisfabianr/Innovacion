jQuery(document).ready(function($) {

	/** PARALAX======================================= */

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	      (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


	/**
	 * Author: Heather Corey
	 * jQuery Simple Parallax Plugin
	 *
	 */
	 
	(function($) {
	 
	    $.fn.parallax = function(options) {
	 
	        var windowHeight = $(window).height();
	 
	        // Establish default settings
	        var settings = $.extend({
	            speed        : 0.15
	        }, options);
	 
	        // Iterate over each object in collection
	        return this.each( function() {
	 
	        	// Save a reference to the element
	        	var $this = $(this);
	 
	        	// Set up Scroll Handler
	        	$(document).scroll(function(){
	 
	    		        var scrollTop = $(window).scrollTop();
	            	        var offset = $this.offset().top;
	            	        var height = $this.outerHeight();
	 
	    		// Check if above or below viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
	 
				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
	 
	                 // Apply the Y Background Position to Set the Parallax Effect
	    			$this.css('background-position', 'left ' + yBgPosition + 'px');
	                
	        	});
	        });
	    }
	}(jQuery));

	$('.bg').parallax({
		speed :	0.15
	});

	$('.bg-2').parallax({
		speed :	0.25
	});

	/** MODAL ======================================= */

	 $(".linkSource").click(function () {
        $("#myModal").modal("show");
    });
});
