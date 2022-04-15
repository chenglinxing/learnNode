const http = require("http")

//C创建服务的2种方式
const server1 = http.createServer((req, res) => {
    res.end("Server1")
})

server1.listen(8000, () => {
    console.log("server1启动");
})

const server2 = new http.Server((req, res) => {
    res.end("Server2")
})

server2.listen(8081, () => {
    console.log("server2启动");
    console.log(server1.address().port);
})