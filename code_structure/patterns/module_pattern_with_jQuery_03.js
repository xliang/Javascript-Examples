var Widget = (function(){
    var ele;

    function init(_ele){
        ele = _ele;
    };

    return {
        init: init
    };
})();

$(function(){
    Widget.init( $('#foo') );
});

/*
If your script is loaded before jquery, you will not see an error "undefined is not a function". But, if you perform a query before domReady, you could get unexpected result, ele = []

EDIT: btw.. put your <script> tags before </body> NOT within <head></head>

*/