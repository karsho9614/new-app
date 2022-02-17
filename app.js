const http = require('http');
const fs = require('fs');

var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

var contentType = mimeTypes[extname] || 'application/octet-stream';

var server = http.createServer(
    (request,response)=>{
        fs.readFile('./index.html','UTF-8',(error,data)=>{
            response.writeHead(200, {'Content-Type':contentType});
            response.write(data);
            response.end();
        })
       
    }
);
server.listen(3000);