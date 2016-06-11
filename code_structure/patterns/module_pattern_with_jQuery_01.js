// Using the module pattern for a jQuery feature
$( document ).ready(function() {
    
    var feature = (function() {
        var items = $( "#myFeature li" );
        var container = $( "<div class='container'></div>" );
        var currentItem = null;
        var urlBase = "/foo.php?item=";
 
        var createContainer = function() {
            var item = $( this );
            var _container = container.clone().appendTo( item );
            item.data( "container", _container );
        };
 
        var buildUrl = function() {
            return urlBase + currentItem.attr( "id" );
        };
 
        var showItem = function() {
            currentItem = $( this );
            getContent( showContent );
        };
 
        var showItemByIndex = function( idx ) {
            $.proxy( showItem, items.get( idx ) );
        };
 
        var getContent = function( callback ) {
            currentItem.data( "container" ).load( buildUrl(), callback );
        };
 
        var showContent = function() {
            currentItem.data( "container" ).show();
            hideContent();
        };
 
        var hideContent = function() {
            currentItem.siblings().each(function() {
                $( this ).data( "container" ).hide();
            });
        };
 
        items.each( createContainer ).click( showItem );
 
        return {
            showItemByIndex: showItemByIndex
        };
    })();
 
    feature.showItemByIndex( 0 );
});