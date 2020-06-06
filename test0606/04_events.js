const events = require('events');  // 核心库，不加路径

const myEmitter = new events.EventEmitter(); // 新建事件对象

myEmitter.on('someEvent', function (message) {   // 绑定事件和回调函数
  console.log(message);
});

myEmitter.emit('someEvent', 'the event was emitted');  // 触发事件

console.log("======================");

const util = require('util');  // 核心库，使用其inherits函数

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter); // Person继承events.EventEmitter后，拥有了绑定事件的属性

const xiaoming = new Person('xiaoming');
const lili = new Person('lili');
const lucy = new Person('lucy');

const person = [xiaoming, lili, lucy];

person.forEach(person => {   // 绑定事件和回调函数
  person.on('speak', message => {
    console.log(person.name + " said: " + message);
  });
});

xiaoming.emit('speak', 'hi');
lili.emit('speak', 'bye');
lucy.emit('speak', 'haha');
