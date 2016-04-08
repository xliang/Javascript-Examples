(function($) {
    $.jPanelMenu = function(options) {
        var jpm = {
            options: $.extend({
                'animated': true,
                'duration': 500,
                'direction': 'left'
            }, options),
            openMenu: function( ) {
                …
                this.setMenuStyle( );
            },
            closeMenu: function( ) {
                …
                this.setMenuStyle( );
            },
            setMenuStyle: function( ) { … }
        };

        return {
            open: jpm.openMenu,
            close: jpm.closeMenu,
            someComplexMethod: function( ) { … }
        };
    };
})(jQuery);

// how to use 

var jpm = $.jPanelMenu({
    duration: 1000,
    …
});
jpm.open( );
