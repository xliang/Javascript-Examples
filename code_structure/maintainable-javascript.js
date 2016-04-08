/*
	Global Name Space 

	Common Solution 

	1. Self-Executing Anonymous function 

	2. namespaces 	
*/

var NS = NS || {}; // if NS is not defined, make it equal to  an empty object 
NS.Utils = NS.Utils || {};
NS.Models = NS.Models || {}; 
NS.Views = NS.Views || {}


// 3. Revealing Modeul Pattern
/*
	Above, an App function is defined within the NS object. Inside, 
	a function variable for init is defined, and returned as an anonymous object literal. 
	Notice that, at the end, there's that extra set of parenthesis: }());. 
	This forces the NS.App function to automatically execute and return. 
	Now, you can call NS.App.init() to initialize your app. 
*/


NS.App = (function () {
    // Initialize the application
    var init = function () {
        NS.Utils.log('Application initialized...');
    };
     
    // Return the public facing methods for the App
    return {
        init: init
    };
}());
 
NS.App.init();

// 4. Self-Executing Anonymous Function

(function ($) {
    var welcomeMessage = 'Welcome to this application!'
     
    NS.Views.WelcomeScreen = function () {
        this.welcome = $('#welcome');
    };
     
    NS.Views.WelcomeScreen.prototype = {
        showWelcome: function () {
            this.welcome.html(welcomeMessage)
                .show();
        }
    };
}(jQuery));
 
$(function () {
    NS.App.init();
});
 
// Modify the App.init above
var init = function () {
    NS.Utils.log('Application initialized...');
    this.welcome = new NS.Views.WelcomeScreen();
    this.welcome.showWelcome();
};

// 5. Observer Pattern (Pubsub)
/*
Pubsub essentially allows us to subscribe to DOM events, such as click and mouseover. 
On one hand, we're listening to these events, and, on the other, 
something is publishing those events - for example, 
when the browser publishes (or announces) that someone clicked on a particular element. 
There are many libraries for pubsub, as it's a short bit of code. 
Perform a quick Google search, and thousands of choices will make themselves available. 
*/

// A data model for retrieving news.
NS.Models.News = (function () {
    var newsUrl = '/news/'
     
    // Retrieve the news
    var getNews = function () {
        $.ajax({
            url: newsUrl
            type: 'get',
            success: newsRetrieved
        });
    };
     
    var newsRetrieved = function (news) {
        // Publish the retrieval of the news
        amplify.publish('news-retrieved', news);
    };
     
    return {
        getNews: getNews
    };
}());

/*
This code above is a view for displaying the retrieved news. 
In the News constructor, Amplify subscribes to the news-retrieved topic. 
When that topic is published, the showNews function is fired, accordingly. Then, the news is appended to the DOM.
*/

(function () {
    // Create a news views.
    NS.Views.News = function () {
        this.news = $('#news');
         
        // Subscribe to the news retrieval event.
        amplify.subscribe('news-retrieved', $.proxy(this.showNews));
    };
     
    // Show the news when it arrives
    NS.Views.News.prototype.showNews = function (news) {
        var self = this;
        $.each(news, function (article) {
            self.append(article);
        });
    };
}());

// Modify this the App.init above
// Again, modify the init function from the app to add the news retrieval... and you're done! 

var init = function () {
    NS.Utils.log('Application initialized...');
    this.welcome = new NS.Views.WelcomeScreen();
    this.welcome.showWelcome();
     
    this.news = new NS.Views.News();
     
    // Go get the news!
    NS.Models.News.getNews();
};

// 6. Require.js

/*

In the code snippet above, there is a main.js file, 
which is where the process begins. 
The first argument to the require function is an array of dependencies. 
These dependencies are a list of files that are required for app.js. 
As they finish loading, whatever the module returns is passed as an argument to the function callback on the right.

Then, there is app.js, which requires jQuery, as well as a view. 
Next, the view, home.js, only requires jQuery. 
It has a home function within it, and returns an instance of itself. 
In your application, these modules are all stored within separate files, 
making your application very maintainable. 

*/


// main.js
require(['libs/jquery','app.js'], function ($, app) {
    $(function () {
        app.init();
    });
});
 
// app.js
define(['libs/jquery', 'views/home'], function ($, home) {
    home.showWelcome();
});
 
// home.js
define(['libs/jquery'], function ($) {
    var home = function () {
        this.home = $('#home');
    };
     
    home.prototype.showWelcome = function () {
        this.home.html('Welcome!');
    };
     
    return new home();
});
