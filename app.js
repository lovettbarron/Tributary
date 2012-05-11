/**
 * Module dependencies.
 */

var express = require('express'),
	fs = require('fs');
var app = express.createServer()
require('./app/config.js').boot(app);

app.configure(function()
{
	app.set('views', __dirname + '/project');
	app.set('view engine', 'jade');
	app.use(express.bodyParser()   );
	app.use(express.methodOverride());
	app.use(express.compiler({ src: __dirname + '/bootstrap/less', enable: ['less'] }));
	app.set('view options', { pretty: true });
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req,res) {
	try{
		res.render('index', {
			title: 'example'
		});
	} catch(e) {
    console.log(e);
  }
});

app.get('/:path', function(req, res){
	var path = 'index';
	var stat;
	/* Disabling for now, is supposed to check for directory/prevent dead returns but ya
	//Path definition
	if( req.params.path !== undefined) {
		try{
			path = __dirname + '/project/pages/' + req.params.path;
			stat = fs.lstatSync(__dirname + '/project/pages/' + req.params.path);
			if( !stat.isDirectory() ) {
				path = 'index'
			} else { path = 'project/pages/' + req.params.path + 'index'; }
		} catch(e) { console.log('error:' + e)}
		if (path.isDirectory()) {
			path = 'project/pages/' + req.params.path + '/index'
		}	
		else {
			path = 'index';
		}
	} */
	console.log('Returning results from: ' + path)	

	path = __dirname + '/project/pages/' + req.params.path;

	//Return type
	if( req.xhr ) {
		res.partial(path, {
			page: req.params.path
		})
	}
	else {
		res.render(path, { 
			page: req.params.path
		});
	}
});



app.get('/renderpdf', function(req, res){
	//TBD with http://code.google.com/p/wkhtmltopdf/
});



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);