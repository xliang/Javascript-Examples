// Here’s a great library for pub/sub if you are interested: https://gist.github.com/661855

(function ($, App, window) {
  'use strict';
  var ready = false,

  handler = function (e) {
  },

  init = function (page) {
    if (ready) return;
    // init stuff
    $('.el').on('click', handler);
    ready = true;
  };

  App.Subscribe('app/ready', init);
}(jQuery, App, this));
