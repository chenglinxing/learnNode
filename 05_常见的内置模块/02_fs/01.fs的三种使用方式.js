const fs = require("fs");

//案例 读取文件信息
const filepath = "./a.txt";

//1.方式一： 同步操作
// const info = fs.statSync(filepath)
// console.log("后续要执行的代码")
// console.log(info)

//2.方式二： 异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
// });

// console.log("后续要执行的代码")

//3.方式三： promise版本
fs.promises.stat(filepath).then((info) => {
  console.log(info);
});

console.log("后续要执行的代码");
