/// JavaScript source code representing example jQuery aware module pattern
/// Solution Zero, Inc. Lubbock Texas 
/// Troy Locke -- troy@slnzero.com
var myMessageApp = (function() {
    "use strict"

    // I avoid these with the bindControls functionality but I show if for example.
    var someElement = $("#foo"); // some element I know I'll use lots

    // private variables
    var pvtMessageVal;
    var pvtAdditionalMessageVal;
    
    // we create an object to hold all the jQuery controls, so we can call
    // binding after loading an HTML page dynamically via AJAX
    // see bindControls further down
    var messageCtrls = {};

    var config = {
        // *example, this must be passed into init(config)
        fooSelector: null, // $("#foo")
        messageSelector: null, // $(".message")
        additionalMessageSelector: null, // $(".additional_message")
        options: {
            showOK: true,
            showCancel: true,
            warningLevel: 1,
        }
    }

    // AJAX calls
    var getMessage = function(message) {
        $.ajax({
            url: '/getMessagePage',
            type: 'POST',
            dataType: "json",
            data: {'message' : message},
            success: function(data) {
                // ...
                messageCtrls.mainMessageDiv.html(data.message);
                // call bind controls to bind to the newly introduced dom elements
                messageCtrls = bindMessageControls();
                },
            error: function() {
                // ...
                }
        });
    };

    var inputClick = function(event) {
        event.preventDefault();
        // depending on if you'll reuse these selectors throughout 
        // the app I might have these as variables
        $('.loading').html('<img class="remove_loading" src="/graphics/loading.gif" />');

        // try to avoid these
        var msg = $(".additionalMessage").val();
        // and use this 
        var msg = config.additonalMessageSelector.val();
        // or
        var msg = pvtAdditionalMessageVal;

        if (msg == ""){
            $("#message_empty").jmNotify();
            $('.remove_loading').remove();
        } else {
            getMessage(msg);
        }
    };

    var bindMessageControls = function () {
        var self = {};

        // Modal
        self.thisModal = $(".MessageModal");

        // CheckBoxs
        self.fooCb = $(".foo_checkbox");
        
        // Buttons
        self.okBtn = $(".btnOk");
        self.cancelBtn = $(".btnCancel");

        // Divs
        self.mainMessageDiv = $(".main_message");
        self.additionalMessageDiv = $(".addtional_message");

        //Help Icons
        self.HelpIcon = $(".help-icon");

        return self;
    };

    var bindVals = function () {
        //check to make sure we have a valid config passed in before we set the values
        if (!config.messageSelector) throw "Invalid configuration object passed in init()";
        
        //bind the values to "private variables"
        pvtMessageVal = config.messageSelector.val();
        
        //this control is optional, test existence
        if(config.additionalMessageSelector.length)
            pvtAdditionalMessageVal = config.additionalMessageSelector.val();
    };

    var bindFunctions = function() {
        // you can use jQuery
        $("btnOk").on("click", inputClick)
        // but we have the controls object to use, so instead
        messageCtrls.okBtn.on('click, inputClick')
    };

    var init = function () {
        messageCtrls = bindMessageControls();
        bindFunctions();
    };

    var showMessage = function (cfg) {
        config = cfg;
        bindVals();
        messageCtrls.thisModal.modal({
            show: true,
            keyboard: false,
            backdrop: "static"
        });
    };
    
    return {
        init: init,
        show: showMessage,
        getMessage: getMessage
        //anything else you want available
        //through myMessageApp.function()
        //or expose variables here too
    };

})();
 
//usage
$("document").ready(function () {
    myMessageApp.init();
});