const fs = require('fs');

function route(handle, pathname, response) {    // 11. 添加handle参数  
  console.log('Routing a request for ' + pathname); 
  if (typeof handle[pathname] === 'function') {   // 12. 通过 handle 的 key 调用 handler 中的函数  → 13. server.js → 14.handler.js  
    handle[pathname](response);
  } else {
    console.log("No handler for " + pathname);
    fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
  }
}

module.exports.route = route;

// 4. 通过此路由函数拿到url，然后到handler中进行处理 → 5. 新建handler.js