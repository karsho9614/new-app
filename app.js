const http = require('http');
const fs = require('fs');

var server = http.createServer(
    (request,response)=>{
        fs.readFile('./index.html','UTF-8',(error,data)=>{
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(data);
            response.end();
        })
       
    }
);
server.listen(3000);