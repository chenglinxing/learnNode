const http = require("http")
const url = require("url")
const qs = require("querystring")

//创建一个web服务器
const server = http.createServer((req, res) => {
    //request对象中封装了客户端给服务器传递过来的所有信息
    console.log(req.url)
    let {
        pathname,
        query
    } = url.parse(req.url)
    console.log(qs.parse(query));
    let {
        username,
        pwd
    } = qs.parse(query)
    console.log(username,pwd);
    res.end("hello server")
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})