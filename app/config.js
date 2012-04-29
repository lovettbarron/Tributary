var express = require('express');

exports.boot = function(app){
  bootApplication(app);
}

// App settings and middleware

function bootApplication(app) {
	// By Matt Sain, on http://stackoverflow.com/questions/4618257/node-js-express-js-how-to-render-less-css
	var less;
	express.compiler.compilers.less.compile = function (str, fn) {
	    if (!less) less = require("less");                                                      
	    try {
	        less.render(str, { compress : true }, fn);
	    } catch (err) {
	        fn(err);
	    }
	};

	app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
	
	console.log('Configuration loaded');
}

function compileBootstrap() {

}