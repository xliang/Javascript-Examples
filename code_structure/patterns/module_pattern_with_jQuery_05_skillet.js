(function( skillet, $, undefined ) {
    //Private Property
    var isHot = true;

    //Public Property
    skillet.ingredient = "Bacon Strips";

    //Public Method
    skillet.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + skillet.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    }    
}( window.skillet = window.skillet || {}, jQuery ));

// to extend the function 

//Adding new Functionality to the skillet
(function( skillet, $, undefined ) {
    //Private Property
    var amountOfGrease = "1 Cup";

    //Public Method
    skillet.toString = function() {
        console.log( skillet.quantity + " " +
                     skillet.ingredient + " & " +
                     amountOfGrease + " of Grease" );
        console.log( isHot ? "Hot" : "Cold" );
    };
}( window.skillet = window.skillet || {}, jQuery ));