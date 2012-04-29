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

	app.configure(function()
	{
		app.set('views', __dirname + '/project');
		app.set('view engine', 'jade');
		app.use(express.bodyParser()   );
		app.use(express.methodOverride());
		app.use(express.compiler({ src: __dirname + '/bootstrap/less', enable: ['less'] }));
		app.use(app.router);
		app.use(express.static(__dirname + '/public'));
	});
	
	console.log('Configuration loaded');
}

function compileBootstrap() {

}