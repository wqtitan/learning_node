const http = require('http');
const fs = require('fs');

function startServer(route, handle) {   // 2. 添加route参数 → 3. app.js  9. 添加 handle 参数 → 10.
  const onRequest = function (request, response) {
    console.log('Request received' + request.url);

    {
    // 实现简易路由 start 
    // if (request.url === '/' || request.url === '/home') {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   fs.createReadStream(__dirname + "/index.html", "utf8").pipe(response);
    // } else if (request.url === '/review') {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   fs.createReadStream(__dirname + "/review.html", "utf8").pipe(response);
    // } else if (request.url === '/aip/v1/records') {
    //   response.writeHead(200, { "Content-Type": "application/json" });
    //   const jsonObj = {
    //     name: "hfpp2012"
    //   };
    //   response.end(JSON.stringify(jsonObj));
    // } else if (request.url === '/favicon.ico') {
    //   return;
    // } else {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
    // }
    //实现简易路由 end
    }

    // 重构路由
    route(handle, request.url, response);      // 1.route 是从外部传来的参数 → 2      10. 添加 handle 参数 → 11.router.js     13. 传入response参数 → router.js  
  };

  const server = http.createServer(onRequest);

  server.listen(3000);
  console.log("Server started on localhose port 3000");
}

module.exports.startServer = startServer;