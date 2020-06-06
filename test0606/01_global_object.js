console.log("hello node");

setTimeout(() => {
  console.log("过了3秒 hello setTimeout")
}, 3000)

setInterval(() => {
  console.log("2 seconds hava passed...")
}, 2000)

console.log(__dirname);

console.log(__filename);
