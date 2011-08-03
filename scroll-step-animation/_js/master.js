/* START spaghetti, undocumented js */
(function($) {
	var crosshair, c_width, c_height, windowHeight, windowWidth;
	var crosshair = {};
  $(document).ready(function() {
	  
	  windowHeight = $(window).height();
	  windowWidth = $(window).width();
	  
  	crosshair = $('#crosshair');
  	c_width = crosshair.width();
  	c_height = crosshair.height();
  	c_offset_x = 0;
  	c_offset_y = 0;
  	
  	// move crosshair to center
  	crosshair.css({
  		position: 'fixed',
  		top: ((windowHeight / 2) - (c_height / 2) + (-1*c_offset_y)) + 'px',
  		left: ((windowWidth / 2) - (c_width / 2) + c_offset_x) + 'px',
  	});
  	
  	
  	scrollResponse();
  	$(window).scroll(function() {
  		scrollResponse();
  	});
  	$.fn.stepAnimate = function(effect) {
  	
  		$this = $(this); //bc it looks cool to webdevs like me
  		
  		if (!$this.data('start_top')) {
	  		start_top = $this.offset().top;
	  		$this.data('start_top', start_top);
	  	} else {
	  		start_top = $this.data('start_top');
	  	}
  		
			$body = $('.body',this);
  		$body.startAnimation(effect, {
  			step: function(now, fx) {	
		  		move = start_top - $this.offset().top;
		  		dpm(start_top - move);
  				
  			}
  		});
  		$body.pauseAnimation();
  		$body.resumeAnimation();
  		dpm($body);
  		$body.stepScroll();
  	}
  	
  	$('#company').waypoint(function(event, direction) {
  	
  		//dpm();
  		if (direction == 'up') {
  			companyEffect = {
  				marginLeft: '-900px'
  			}
  		} else {
  			companyEffect = {
  				marginLeft: '+900px'
  			}
  		}
  		
  		
//  		$(this).startAnimation(companyEffect, {
//  			step:	function(now, fx) {
//  							$(this).stop();
//  						}
//  		});
			$this = $('.body',this);
			finished = false;
  		$(window).scroll(function() {
				$this.startAnimation(companyEffect, {
					step:	function(now, fx) {
									$this.stop();
								}
				}, 'none');  			
  		});
  		//$(this).pauseAnimation();
  		//$(this).resumeAnimation();
  		
  	},{
  		offset: $('#company').offset().top * 0.9 // aka centre
  	});
  	
  }); 
  
  $.fn.stepScroll = function() {
  	$anim = $(this);
  	$(window).scroll(function() {
  		$anim.resumeAnimation();
  		dpm($anim);
  	});
  }
  
  function scrollResponse() {
  }
  
//	$.fn.stepanimate = function(options) {  
//	
//		var settings = {
//		  'location'         : 'top'
//		};
//	 
		// If options exist, lets merge them
		// with our default settings
//		if (options) { 
//		  $.extend( settings, options );
//		}
//		
//		var methods = {
//		  init : function( options ) {  },
//		  show : function( ) {    },
//		  hide : function( ) {  },
//		  update : function( content ) {  }
//		};
//		
//		$.fn.stepanimate = function( method ) {
//		  
		  // Method calling logic
//		  if ( methods[method] ) {
//		    return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
//		  } else if ( typeof method === 'object' || ! method ) {
//		    return methods.init.apply( this, arguments );
//		  } else {
//		    $.error( 'Method ' +  method + ' does not exist on jQuery.stepanimate' );
//		  }    
//		
//		};
//	
//	};
	
  /* util */
  function dpm(input) {
  	console.log(input);
  }
})(jQuery);
/* END spaghetti, undocumented js */

