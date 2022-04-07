const fs = require("fs")


//传统的文件写入方式
// fs.writeFile("./bar.txt", "hello stream", {
//     flag: "a"
// }, (err) => {
//     console.log(err);
// })

//stream的写法
const writer = fs.createWriteStream("./bar.txt", {
    flags: "r+",
    start: 5
})

writer.write("你好", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("写入成功！");
})

writer.write("CEO",(err)=>{
    console.log("第二次写入");
})

writer.end("hello world")

writer.on("close",()=>{
    console.log("文件被关闭");
})