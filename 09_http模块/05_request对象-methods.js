const http = require("http")
const url = require("url")
const qs = require("querystring")

//创建一个web服务器
const server = http.createServer((req, res) => {
    //request对象中封装了客户端给服务器传递过来的所有信息
    const {
        pathname
    } = url.parse(req.url)
    if (pathname === '/login' && req.method === "POST") {
        //拿body数据
        //需要监听
        req.setEncoding("utf-8")
        req.on("data", (data) => {
            console.log(data, typeof data);
            let {
                username,
                pwd
            } = JSON.parse(data)
            console.log(username,pwd);
        })
        res.end("1111111")
    }
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})