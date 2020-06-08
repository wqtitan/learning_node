const express = require('express');

const app = express();

app.get('/', function (req, res) {
  console.dir(req.query)
  let responseObject = req.method;
  res.send("home page: " + req.query.find);    // query
});

app.get('/profile/:id/user/:name', function (req, res) {
  console.dir(req.params)
  // let responseObject = req.method; 
  res.send("profile page received a id: " + req.params.id);    
});

app.get('/ab?cd', function (req, res) {
  // let responseObject = req.method; 
  res.send("/ab?cd");    
});

app.listen(3000);
console.log("listening to port 3000");
