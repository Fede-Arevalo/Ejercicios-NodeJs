const http = require("http");
console.log("Mi primer script en The Bridge!!!")

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Respuesta del servidor");
    
  })
  .listen(8080);