const http = require("http")
const fs = require("fs")

//创建一个web服务器
const server = http.createServer((req, res) => {
    const fileWriter = fs.createWriteStream("./foo.png",{flags:"a+"})
    // req.pipe(fileWriter)
    req.on("data",(data)=>{
        // console.log(data);
        // fileWriter.write(data)
    })

    req.on("end",()=>{
        console.log("文件上传成功！");
        res.end("文件上传成功！")
    })
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})

