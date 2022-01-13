const path = require("path");

//获取文件信息
const filePath = "/User/why/abc.txt";

console.log(path.dirname(filePath)); //文件路径 不包括文件名
console.log(path.basename(filePath)); //文件名
console.log(path.extname(filePath)); //文件名的后缀

//join 路径拼接
const basePath = "../User1/why";
const filename = "aaa.txt";
const filepath = path.join(basePath,filename)
console.log(filepath)


//resolve 路径拼接
//resolve 会判断拼接的路径字符串中  是否有以 /或 ./或 ../开头的路径
const filepath2 = path.resolve(basePath,filename)
console.log(filepath2)

console.log(path.resolve(__dirname,'05_常见的内置模块'))