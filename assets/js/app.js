"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	theme: 'ios',
	routes: routes,
	view: {
		pushState: false,
	},

});

var mainView = app.views.create('.view-main', {
	url: './index.html'

});
// var mainView = app.views.create('.view-mobil', {
// 	url: './mobil.html'
// 	domCache:false,

// });
 //  var mainView = myApp.addView('.view-main', {
 //   domCache:false,
 // });