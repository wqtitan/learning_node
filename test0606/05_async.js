const fs = require('fs')  // 导入核心库

const READMESync = fs.readFileSync('README.md', 'utf8')
const README = fs.readFile('README.md', 'utf8', function(err, data) {
    console.log("异步的输出: " + data);
});

console.log("同步的输出: " + READMESync);


fs.writeFileSync('WRITEME.md', READMESync)

console.log("finished");
