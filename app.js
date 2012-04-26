/**
 * Module dependencies.
 */

var express = require('express');
var app = express.createServer();

// Optional since express defaults to CWD/views

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


app.get('/', function(req, res){
  res.render('index', { 
	user: test 
	
	});
});

app.get('/renderpdf', function(req, res){
	//TBD with http://code.google.com/p/wkhtmltopdf/
});



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);