const http = require('http');
const url = require('url');
const queryString = require('querystring')

function startServer(route, handle) {   // 2. 添加route参数 → 3. app.js  9. 添加 handle 参数 → 10.
  const onRequest = function (request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log('Request received' + pathname);
    let data = []
    request.on("error", function (err) {
      console.log(err);
    }).on("data", function (chunk) {
      data.push(chunk);
    }).on("end", function () {
      if(request.method === "POST") {
        data = Buffer.concat(data).toString();
        route(handle, pathname, response, queryString.parse(data)); 
      } else {
        let params = url.parse(request.url, true).query;
        route(handle, pathname, response, params);
      }
    })
    // let params = url.parse(request.url, true).query;
    // route(handle, pathname, response, params);      // 1.route 是从外部传来的参数 → 2      10. 添加 handle 参数 → 11.router.js     13. 传入response参数 → router.js  
  };

  let server = http.createServer(onRequest);

  server.listen(3000);
  console.log("Server started on localhose port 3000");

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


}

module.exports.startServer = startServer;