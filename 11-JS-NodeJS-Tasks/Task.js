const myhttp = require('http');
const fs = require('fs');

const myserver = myhttp.createServer((req, res) => {
    if (req.url === '/write') {
        fs.writeFile('welcome.txt', 'Welcome', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully');
            }
        });
    } else if (req.url === '/read') {
        fs.readFile('welcome.txt', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello');
    }
});

myserver.listen(9001, '127.0.0.1', () => {
    console.log('Listening to the port 9001');
});