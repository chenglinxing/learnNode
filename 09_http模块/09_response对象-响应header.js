const http = require("http")

//创建一个web服务器
const server = http.createServer((req, res) => {
    //响应header
    //设置方式一：
    // res.setHeader("Content-Type","appication/json")
    // res.setHeader("Content-Type","text/plain;charset=utf8")

    //设置方式二：
    res.writeHead(200.,{
        "Content-Type":"text/plain;charset=utf8"
    })
    res.end("server")
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})