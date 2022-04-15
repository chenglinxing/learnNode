const http = require("http")

//创建一个web服务器
const server = http.createServer((req, res) => {
    //响应状态码
    //设置状态码 方法一
    // res.statusCode = 400
    //设置状态码  方法二
    res.writeHead(200,{
        a:1
    })
    res.end("hello server") 
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})