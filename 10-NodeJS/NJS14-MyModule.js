var myhttp = require('http');

var dt = require('./myModule.js');

myhttp.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text/html'});

    res.write("the date anld time is currently"+dt.myDateTime());
    res.end();
}).listen(9000);