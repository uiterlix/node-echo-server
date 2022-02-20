var http = require('http');

http.createServer(function (request, response) {
    response.write("Requested: " + request.url + "\n");
    response.end();
    return;
}).listen(8080);
