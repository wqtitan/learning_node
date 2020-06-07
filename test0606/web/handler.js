const fs = require('fs');

function home(response) {
  console.log('Excuting "home" handler');
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html", "utf8").pipe(response);
}

function review(response) {
  console.log('Excuting "review" handler');
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/review.html", "utf8").pipe(response);
}

function api_records(response) {
  console.log('Excuting "api_records" handler');
  response.writeHead(200, { "Content-Type": "application/json" });
  const jsonObj = {
    name: "hfpp2012"
  };
  response.end(JSON.stringify(jsonObj));
}

function favicon_ico() {
  return;
}

module.exports = {
  home: home,
  review: review,
  api_records: api_records,
  favicon_ico: favicon_ico
};

// 6. 新建handler.js → 7. app.js