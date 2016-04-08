// build a news widget, listing some new articles, and has a button in which you can 
// load more news articles. 

var s, 
var NewsWidget = {

	// settings or cached items
	settings: {
		numArticles : 5,
		articleList : $('#article-list'),
		moreButton : $('#more-button')
	},

	// know exactly where to look when you start reading the code and figuring out what happens when
	// The first thing the init function will do is set the variable s 
	// (which we declared at the same level as the Module) to be a pointer to the settings. 

	// Because of where s was declared, this means all sub-functions of the Module 
	// will have access to the settings. Nice !!!

	init: function () {
		// kick things off
		s = this.settings; 
		this.bindUIActions(); 
	},

	bindUIActions : function () {
		s.moreButton.on("click", function () {
			NewsWidget.getMoreArticles(s.numArticles); 
		}); 
	},

	getMoreArticles : function(numToGet) {
		// $.ajax for something 
		// using numToGet as param
	}
}; 

// global.js 

//= require common/library.js

//= require module/news-widget.js
//= require module/some-other-widget.js

(function() {

  NewsWidget.init();

  SomeOtherModule.init();

})();

/*
    Update 1. 
    If you use that same “s” variable for the settings for each module, 
    and then import them all into the same global.js, wouldn’t they conflict with each other?

*/

// That is a good catch IMHO, they’d better use some module loader
//  (require.js or equivalent) or use an auto-executing function

(function(namespace) {
    // ...
    namespace.NewsWidget = NewsWidget;
})(namespace);

// or 

(function (){
    var s,
    ModuleWhatever = {
        // ... etc ...
    };
}());

// Update 2 

// Agree with Michael generally. I used to write my modules like demonstrated in the post 
// and quickly ran into name collision issues. I now write my modules using the self-executing function pattern, thus providing “encapsulation” for private variables/methods/etc to the module. Try something like:

var NewsWidget = (function(){
        var s = { 'internal' : 'settings' },
        me = {};

        function setupBindings() {
            //do UI bindings
        }

        me.init = function() {
            setupBindings();
            //do other important setup things
        }

        return me;
     }());





// -----------------------  Another sample 1---------------------------//

var s,
PrimaryNameSpace = {

        settings : {
            basicExample: $('.main'),
            nestedExample : {
                first: true,
                second: true,
                third: true,
                fourth: true,
                fifth : ['one', 'two', 'three', 'four', 'five', 'six']
            },

            foo: 'bar'

        },

        init: function () {
            s = this.settings;
            this.nextMethod();
            this.anotherMethod();
        },

        nextMethod: function () {
        	// ? s = this.settings; 

        },

        anotherMethod: function () {
        	// ? s = this.settings; 
        	
        }

    };

$(function () {
    PrimaryNameSpace.init();
    // or 
    PrimaryNameSpace.nextMethod(); 
});

// --------------------------------- Another Sample 2 --------------------------//


var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list"),
    moreButton: $("#more-button")
  },

  init: function(options) {
    this.settings = $.extend(this.settings, options);
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.moreButton.on("click", function() {
      NewsWidget.getMoreArticles(s.numArticles);
    });
  },

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

};

$(function(){
  NewsWidget.init({
    numArticles: 6
  });

  console.log(s.numArticles);
});









