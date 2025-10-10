const myhttp = require('http');
//http://localhost:8000/
const myserver = myhttp.createServer((req, res) => {
    res.end("Hello from server arrow ");
});

myserver.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the port 8000");
});