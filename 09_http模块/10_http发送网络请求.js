const http = require("http")

//http发送get请求
// http.get("http://localhost:8000",(res)=>{
//     res.on("data",(data)=>{
//         console.log(data.toString());
//     })

//     res.on("close",()=>{
//         console.log("获取所有的结果");
//     })
// })

//http发送post请求
const req = http.request({
    method: "POST",
    hostname: "localhost",
    port: 8000
}, (res) => {
    res.on("data", (data) => {
        console.log(data.toString());
    })

    res.on("close", () => {
        console.log("获取所有的结果");
    })
})

req.end();