/**
 * Module dependencies.
 */

var express = require('express'),
	fs = require('fs'),
  url = require('url');
var app = express.createServer()
require('./app/config.js').boot(app);

app.configure(function()
{
	app.set('views', __dirname + '/project');
	app.set('view engine', 'jade');
	app.use(express.compiler({ src: __dirname + '/bootstrap/less', enable: ['less'] }));
	app.set('view options', { pretty: true });
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
	app.use(express.basicAuth('sktest','sktest'));
});

app.get('/', function(req,res) {
	res.render(__dirname + '/project/pages/dashboard', {
		title: '1'
	});
});

app.get('/:path', function(req, res){
	path = __dirname + '/project/pages/' + req.params.path;
	console.log('Returning results from: ' + path)	

	//Return type
	res.render(path, { 
		title: '3'
	});
});

// app.get('/renderpdf', function(req, res){
// 	//TBD with http://code.google.com/p/wkhtmltopdf/
// });

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);