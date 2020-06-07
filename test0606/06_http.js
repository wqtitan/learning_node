const http = require('http');

const server = http.createServer(function (request, response) {
  console.log("Request received.");

  response.writeHead(200, { "Content-Type": "text/html" });

  response.write("<div>hello node</div>");

  response.end();
});

server.listen(3000);

console.log("Server started on localhose port 3000");
