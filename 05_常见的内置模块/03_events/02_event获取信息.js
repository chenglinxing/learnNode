const EventEmitter = require("events");

//1.创建发射器
const emitter = new EventEmitter();

//2.监听某一个事件
//on
//addListener
emitter.on("click", (args) => {
  console.log("监听click1事件", args);
});

let listener = (args) => {
  console.log("监听click2事件", args);
};

emitter.on("tap", listener);

//3.发出事件
// setTimeout(() => {
//   emitter.emit("click", "a", "b", "c");
//   emitter.off("click", listener);
//   emitter.emit("click", "a", "b", "c");
// }, 2000);
console.log(emitter.eventNames()) //获取有几中监听的事件 [ 'click', 'tap' ]
console.log(emitter.listenerCount("click")) //获取监听事件的个数
console.log(emitter.listeners("click")) //获取监听的具体函数 [ [Function (anonymous)] ]