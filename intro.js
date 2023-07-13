const http = require("http");
const log = require("./log.js");
const sayHello = require("./exportsDemo.js");

http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url =="/admin"){
        res.writeHead(200, {"Content-type" :"text/html"})
        res.write("<html><body><strong>Admin sayfasi</strong></body></html>")
    }else if(req.url == "/"){
        res.writeHead(200, {"Content-type" :"text/html"})
        res.write("<html><body><strong>Ana sayfa</strong></body></html>")
    }else if(req.url == "/customer"){
        res.writeHead(200, {"Content-type" :"application/json"})
        res.write(JSON.stringify({name:'Engin',lastName:"Demirog"}))
    }
    res.end();
}).listen(8080);

log.information("Sunucu yayina gecti");

console.log(sayHello());
