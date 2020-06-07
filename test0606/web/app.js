const server = require('./server');
const route = require('./router').route;

// 7. 引入handler并将路径与handler中的处理函数对应 → 8. 传handle
const handler = require('./handler');

var handle = {};

handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;
handle['/favicon.ico'] = handler.favicon_ico;

server.startServer(route, handle);   //3. 添加 route 参数  → 4. 新建 router.js  8. 添加参数handle → 9. server.js