const express = require("express")

//express 为一个函数
const app = express()

app.post("/",(req,res,next)=>{
    res.end("server")  
})

//开启监听
app.listen(8000,()=>{
    console.log("express服务启动");
})