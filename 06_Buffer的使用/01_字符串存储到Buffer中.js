const msg = "Hello World";

//创建Buffer

//1.创建方式一：不推荐（过期）
// const buffer = new Buffer(msg);
// console.log(buffer);

//2.创建方式二：
const buffer = Buffer.from(msg,'utf16le');
console.log(buffer);
