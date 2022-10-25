const http = require("http");
const numero = require("./numeros.js");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);

numero.esPar(2);
numero.esPar(3);
numero.esPar(101);
numero.esPar(201);
numero.esPar(202);
numero.esPar(100);
