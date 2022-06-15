const express = require("express")

//express 为一个函数
const app = express()

app.get("/products/:id/:name",(req,res,next)=>{
    console.log(req.params);
    res.end("server")  
})

app.get("/user",(req,res,next)=>{
    console.log(req.query);
    res.end("server")  
})

//开启监听
app.listen(8000,()=>{
    console.log("express服务启动");
})