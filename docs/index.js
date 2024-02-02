const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8081;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.swf': 'application/x-shockwave-flash',
    '.wasm': 'application/wasm'
}

function staticFile(res, filePath, ext){
    res.setHeader("Content-Type", mimeTypes[ext]);
    fs.readFile('./src'+filePath, { encoding:'utf8', flag:'r' }, (err, data) =>{
        if(err) {
            console.error(err);
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });
}

http.createServer(function (req, res){
    const url = req.url;

    switch(url) {
        case '/':
            staticFile(res, '/index.html', '.html');
            break;
        case '/favicon.ico': {
            res.writeHead(404);
            break;
        }
        default:
            const extname = String(path.extname(url)).toLowerCase();
            if(extname in mimeTypes){
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end();
            }
    }
}).listen(PORT);