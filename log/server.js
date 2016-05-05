var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';
var port = '1330';

var server = http.createServer( function(request,response){
    console.log('gelen istek:' + request.url);
fs.readFile(request.url,function(error,data) {

    if (erro) {
        response.writeHead(404,{'Content-type':'text/plain'});
response.end('sayfa bulunamadi');
    }else {
        response.writeHead(200,{'Content-type':'text/html'});
        respond.end(data);

    }

});
    server.listen(port,host,function() {
console.log('dinlenen port:' +  host + ':' + port);
    });


});