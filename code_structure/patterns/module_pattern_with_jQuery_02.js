// module pattern referencing jQuery

var setupValidate = (function () { 
    
    return function(options) {
          var defaultOptions = {
               qtipOptions : {
                  content: function (api) {
                      var text = $(this).prev();
                      return "<div class='tip_cont'><span class='simple cost'><span class='corner'></span>" + $(text).attr('data-description') + "</span></div>";
                   },
                   position: {
                     target: 'mouse',
                     adjust: { x: 5, y: 17 }
                   },
                   style: {
                      tip: { corner: false }
                   }
               },
               formSelector : "#reg_form_pay",
               invalidFormSelector : 'div.invalid_form',

         };
         
         options = $.extend(defaultOptions,options);
         
         $.validator.addMethod("checkPhoneNumber", function (value, element) {

            if (!value) return true;
            return /^((\+7)|8)(700|701|702|705|707|712|713|717|718,721|725|726|727|777)[0-9]{7}$/.test(value);
         }, "Wrong phone format");

         function updateQTip() {
            $(options.invalidFormSelector).qtip();
         }

    function updateError() {
        $(options.invalidFormSelector).closest('.wrap_input').addClass('error');
        $(options.formSelector).find("input").each(function(element) {
            if ($(this).hasClass('invalid_form')) {
                $(this).closest('.wrap_input').addClass('error');
            } else {
                $(this).closest('.wrap_input').removeClass('error');
            }
        });
        
        updateQTip();
    }

    function validateForm() {
        $(formSelector).validate({...});
    }

    validateForm();
    
    console.log('init ok');
    
  }
}());

// how to call the method 

$(function(){
    setupValidate (/*with options if you'd like to change the default*/);
});
