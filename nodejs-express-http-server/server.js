const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// make server for us
const server = http.createServer((req, res) => {
	// console.log('request made');
	// console.log(req.url, req.method);

	// lodash
	const num = _.random(0, 20);
	console.log(num);

	// only once it will allow execute the function
	const greet = _.once(() => {
		console.log('greet');
	});
	greet();
	greet();

	// set header type content (so that browser which type of data to expect)
	res.setHeader('Content-Type', 'text/html');

	let path = './views/';
	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});

	// this is actually rendering the html tags (generally use for testing)
	/* 	res.write('<link rel="stylesheet" href="#">');
	res.write('<h1> hello world </h1>');
	res.write('<h3> again </h3>'); */

	// to send whole html file.
	/* fs.readFile('./views/index.html', (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	}); */

	// to send data according to url it is requesting.
});

// 3000 is the port no.
server.listen(3000, 'localhost', () => {
	console.log('listening for request...');
});
