const http = require("http")

//创建一个web服务器
const server = http.createServer((req, res) => {
    //响应结果
    //res.write("响应结果")
    // res.end("test") 先res.write("test") 再res.end()
    res.end("hello server")
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})