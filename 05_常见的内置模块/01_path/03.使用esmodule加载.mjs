import path from "path";


const filePath = "/User/why/abc.txt";

console.log(path.dirname(filePath)); //文件路径 不包括文件名
console.log(path.basename(filePath)); //文件名
console.log(path.extname(filePath)); //文件名的后缀