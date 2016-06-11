var myApp = (function() {

  var someElement = $("#foo"); //some element I know I'll use lots

  var addMessage = function(message) {
    $.ajax({
      url: '/test',
      type: 'POST',
      dataType: "json",
      data: {'message' : message},
      success: function(data) {
              ...
      },
      error: function() {
          ...
      }
    });
  };

  var inputClick = function(event) {
    event.preventDefault();
    //depending on if you'll reuse these selectors throughout the app I might have these as variables
    $('.loading').html('<img class="remove_loading" src="/graphics/loading.gif" />');

    var message = $(".wallmessage").val();

    if (message == ""){
      $("#messageempty").jmNotify();
      $('.remove_loading').remove();
    } else {
      addMessage(message);
    }
  };

  var bindFunctions = function() {
    $("input#share").on("click", inputClick)
  };

  var init = function() {
    bindFunctions();
  };

  return {
    addMessage: addMessage
    //anything else you want available
    //through myApp.function()
    //or expose variables here too
  };


})();

//usage

myApp.init();