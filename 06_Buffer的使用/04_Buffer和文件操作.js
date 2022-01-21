const fs = require("fs");
const sharp = require("sharp");

// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data.toString());
// });

//读取 存入图片文件
// fs.readFile("./1.png", (err, data) => {
//   //   console.log(data.toString());
//   fs.writeFile("./2.png", data, (err) => {
//     console.log(err);
//   });
// });

//sharp库的使用
// sharp("./1.png")
//     .resize(1000, 1000)
//     .toFile("./baz.png")

sharp("./1.png")
  .resize(300, 300)
  .toBuffer()
  .then((data) => {
    fs.writeFile("./3.png", data, (err) => console.log(err));
  });
