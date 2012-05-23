/**
 * Module dependencies.
 */

var express = require('express'),
	fs = require('fs'),
  url = require('url');
var app = express.createServer()

app.set('views', __dirname + '/project');
app.set('view engine', 'jade');
app.use(express.compiler({ src: __dirname + '/bootstrap/less', enable: ['less'] }));
app.set('view options', { pretty: true });
app.use(express.static(__dirname + '/public'));

app.configure('production', function(app){
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

	res.render(path, { 
		title: '3'
	});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);