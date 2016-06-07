/*
	https://gamajo.com/javascript-module-pattern-example
*/

var envy = (function( $ ) {
	'use strict';

	var topnavHeight, sliderHeight, headerHeight,

	/**
	 * Calculate variables and size of displacements.
	 *
	 * @since 1.0.0
	 */
	calculateSizes = function() {
		// Menu reset before calculating heights:
		$( '.nav-header .genesis-nav-menu' ).hide();

		topnavHeight = $( '.nav-secondary' ).outerHeight() || 0;
		sliderHeight = $( '.slides li' ).outerHeight() || 0;
		headerHeight = $( '.site-header' ).height();
	},

	/**
	 * Determine header position and displacements.
	 *
	 * @since 1.0.0
	 */
	doDisplacements = function() {
		var scrollYpos  = $( document ).scrollTop();
		var windowWidth = $( window ).width();
		
		// Media query to detect slider onscreen for window size > 960 pixels:
		if ( windowWidth > 960 && $( '.home-slider' ).length > 0 && scrollYpos < sliderHeight - 5 ) {	
			// Set displacements in flow:
			$( '.site-container' ).css( 'padding-top',topnavHeight );
			$( '.home-slider' ).css( 'margin-bottom',headerHeight );
				
			// Unstick header and make header full height:
			$( '.site-header' ).addClass( 'unstuck' ).css( 'top', sliderHeight + topnavHeight );
			$( '.site-header .wrap' ).removeClass( 'narrow' );			
			
			return false;
		} else {
			// Set displacements in flow:
			$( '.site-container' ).css( 'padding-top', topnavHeight + headerHeight );
			$( '.home-slider' ).css( 'margin-bottom', 0 );
			
			// Make header sticky:
			$( '.site-header' ).removeClass( 'unstuck' ).css( 'top', topnavHeight );
			
			// Make header narrow on scroll:
			if ( windowWidth > 960 && scrollYpos > 5 ) {
				$( '.site-header .wrap' ).addClass( 'narrow' );
			} else {
				$( '.site-header .wrap' ).removeClass( 'narrow' );	
			}
		}
	},

	/**
	 * Add in responsive menu feature.
	 *
	 * @since 1.0.0
	 */
	responsiveMenu = function() {
		$( '.nav-header .genesis-nav-menu' ).before( '<li class="menu-icon"></li>' );

		$( '.menu-icon' ).on( 'click.envy', function() {
			$( '.nav-header .genesis-nav-menu' ).slideToggle();
		});
	},

	/**
	 * Fade out store notice soon after page load.
	 *
	 * @since 1.0.0
	 */
	fadeOutStoreNotice = function() {
		$( '.demo_store' ).delay( 4000 ).slideUp();
	},

	/**
	 * Fire events on document ready, and bind other events.
	 *
	 * @since 1.0.0
	 */
	ready = function() {
		calculateSizes();
		doDisplacements();
		responsiveMenu();
		fadeOutStoreNotice();

		$( window ).on( 'resize.envy', calculateSizes );
		$( window ).on( 'scroll.envy resize.envy', doDisplacements );
	};

	// Only expose the ready function to the world
	return {
		ready: ready
	};
	
})( jQuery );

// calll the function 
jQuery( envy.ready );
