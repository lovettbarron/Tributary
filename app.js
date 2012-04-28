/**
 * Module dependencies.
 */

var express = require('express'),
	fs = require('fs');
var app = express.createServer()
require('./app/config.js').boot(app);


var test = {
  name: 'leonardo',
  summary: { email: 'hunter.loftis+github@gmail.com', master: 'splinter', description: 'peaceful leader' },
  weapons: ['katana', 'fists', 'shell'],
  victims: ['shredder', 'brain', 'beebop', 'rocksteady']
};


app.get('/', function(req,res) {
	res.render('index', {
		title: 'example'
	});
});

app.get('/:path', function(req, res){
	var path = 'index';

	//Path definition
	if( req.params.path !== undefined) {
		try{
			path = fs.lstatSync(__dirname + '/project/pages/' + req.params.path);
			if( !path.isDirectory() ) {
				path = 'index'
			} else { path = 'project/pages/' + req.params.path; }
		} catch(e) { console.log('error:' + e)}
		if (path.isDirectory()) {
			path = 'project/pages/' + req.params.path + '/index'
		}	
		else {
			path = 'index';
		}
	}
	console.log('Returning results from: ' + path)	

	//Return type
	if( req.xhr ) {
		res.partial(path, {
			title: 'example'
			
		})
	}
	else {
		res.render(path, { 
			title: 'example'
		});
	}
});



app.get('/renderpdf', function(req, res){
	//TBD with http://code.google.com/p/wkhtmltopdf/
});



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);