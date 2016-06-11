/**
 * Minimum set up for a revealing module pattern jQuery plugin
 *
 * This is a bare plugin that uses the revealing module pattern to attach
 * public and private vars and methods to a jQuery selector.
 *
 * Example:
 *
 * $('#menu').collapsible().init();
 * $('#menu').collapsible().open();
 * $('#menu').collapsible().close();
 *
 * The first part is the selector.
 * The second part returns the revealing module and
 * the third part calls a public method on the revealing module.
 *
 * The third part returns the original jQuery so chaining is possible.
 *
 * Example:
 *
 * $('#menu').collapsible().open().fadeOut().animate({"left": +300});
 *
 * @author Jeroen van der Tuin <jeroen@vandertuin.nl>
 */
;(function($, undefined) {

// Save plugin name internally.
var pluginName = 'collapsible';

var Collapsible = function($el) {
	/**
	 * Default options
	 */
	var defaults = {
		/**
		 * Time the animation should last
		 */
		"delay": 1000,

		/**
		 * Loop the animation
		 */
		"loop": false
	};

	var something = "These vars are all private by the way."

	/**
	 * Initializes the plugin, creates HTML, etc.
	 */
	function init() {
		$el.append('<ul></ul>');
	}

	function open() {
		//...
	}

	function close() {
		//...
	}

	/**
	 * These methods and vars are public
	 */
	return {
		"open": function() {
			open();
			
			// By returning $el chaining is possible again.
			return $el;
		},

		"close": function() {
			close();

			return $el;
		}
	}
};

/**
 * The first time this function is called it attaches the plugin to
 * the element.
 *
 * Chaining continues from the public methods.
 *
 * @returns the plugin
 */
$.fn.anim = function() {
	return this.each(function() {
		var $this = $(this);

		// Attach Anim object first time through.
		if ($this.data(pluginName) == undefined) {
			$this.data(pluginName, new Collapsible($this));
		}

	// Return module.
	}).data(pluginName);
};

})(jQuery);