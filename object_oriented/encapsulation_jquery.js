// clicking on a list item loads some content using the
// list item's ID, and hides content in sibling list items

$(document).ready(function() {
	
	$("myFeature li").append("<div/>").click(function() {
			var item = $(this); 
			var div = item.find("div"); 
			div.load("foo.php?item=" + item.attr("id"), function () {
					div.show();
					item.siblings().find("div").hide();
			}); 
	}); 
});

// refactoring the change

/*
We've broken our feature up into tiny methods. In the future, if we want to change how content is shown, 
it's clear where to change it. In the original code, this step is much harder to locate.

We've eliminated the use of anonymous functions.

We've moved configuration options out of the body of the code and put them in a central location.

We've eliminated the constraints of the chain, making the code easier to refactor, remix, and rearrange.

*/

var myFeature = {

	// define properties 
	init: function (settings) {
		myFeature.config = {
			items: $("#myFeature li"),
			container: $("<div class='container'></div>"),
			urlBase: "/foo.php?item="
		}; 

		// allow the properties to be replaced. 

		$.extend(myFeature.config, settings);
		
		// set up initially
		myFeature.setup(); 
	},

	setup: function() {
		myFeature.config.items
			.each(myFeature.createContainer)
			.click(myFeature.showItem);
	},

	createContainer: function() {
		var item = $(this); 
		var container = myFeature.config.container.clone().appendTo(item); 
		item.data("container", container); 
	},

	buildUrl: function() {
		return myFeature.config.urlBase + myFeature.currentItem.attr("id"); 
	},

	showItem : function() {
		var myFeature.currentItem = $(this); 
		myFeature.getContent(myFeature.showContent); 
	},

	getContent: function(callback) {
		var url = myFeature.buildUrl(); 
		myFeature.currentItem.data("container").load(url, callback); 	
	},

	showContent: function() {
		myFeature.currentItem.data("container").show(); 
		myFeature.hideContent(); 
	},

	hideContent : function() {
		myFeature.currentItem.siblings().each(function() {
			 $(this).data("container").hide(); 
		});
	}

}; 

$(document).ready(myFeature.init); 