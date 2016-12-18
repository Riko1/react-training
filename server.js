var http = require('http');


http.createServer((request, response) => {
	response.writeHead(200, {'Content-type': 'text/html; charset: utf8'});
	response.write('Hello world');
	response.end();
}).listen(8888);