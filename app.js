/**
 * Module dependencies.
 */

var express = require('express'),
	fs = require('fs');
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


var test = {
  name: 'leonardo',
  summary: { email: 'hunter.loftis+github@gmail.com', master: 'splinter', description: 'peaceful leader' },
  weapons: ['katana', 'fists', 'shell'],
  victims: ['shredder', 'brain', 'beebop', 'rocksteady']
};


app.get('/:path', function(req, res){
	var path = 'index';
	//Path definition
	if( req.params.path !== '') {
		try{
			path = fs.lstatSync(__dirname + '/project/pages/' + req.params.path);
			if( !path.isDirectory() ) {
				path = 'index'
			} else { path = __dirname + '/project/pages/' + req.params.path; }
		} catch(e) { console.log('error:' + e)}
		console.log('Returning results from: ' + path)
		if (path.isDirectory()) {
			path = __dirname + '/project/pages/' + req.params.path + '/index'
		}	
		else {
			path = 'index';
		}
	}
	
	//Return type
	if( req.xhr ) {
		res.partial(path, {
			
		})
	}
	else {
		res.render(path, { 
		});
	}
});



app.get('/renderpdf', function(req, res){
	//TBD with http://code.google.com/p/wkhtmltopdf/
});



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);