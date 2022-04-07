const fs = require("fs")

//传统模式
// fs.readFile("./foo.txt", {
//     encoding: "utf-8"
// }, (err, data) => {
//     console.log(data)
// })

//流的模式
const reader = fs.createReadStream("./foo.txt", {
    encoding: "utf-8",
    start: 0,
    end: 10,
    highWaterMark: 2
})

//数据读取的过程
reader.on("data", (data) => {
    console.log(data)
    reader.pause()
    setTimeout(() => {
        reader.resume()
    }, 1000);
})

//文件被打开
reader.on("open", () => {
    console.log("文件被打开")
})

//文件被关闭
reader.on("close", () => {
    console.log("文件被关闭");
})