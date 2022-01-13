const fs = require("fs");
const path = require("path");
//1.创建文件夹
const dirname = "./why";
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
}

//2.读取文件夹的所有文件
// fs.readdir(dirname,(err,files)=>{
//     console.log(files)
// })

// function getFiles(dirname) {
//   fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
//     files.forEach((i) => {
//       if (i.isDirectory()) {
//         const filepath = path.resolve(dirname, i.name);
//         getFiles(filepath)
//       }else{
//           console.log(i.name)
//       }
//     });
//   });
// }

// getFiles(dirname);

//3.重命名
// fs.rename("./why", "./kobe", (err) => {
//   console.log(err);
// });
