const express = require("express")

const app = express()

app.use((req,res,next)=>{
    console.log("第一个");
    next()
   
})

app.get('/home',(req,res,next)=>{
    console.log("home");
    next()
    res.end("1")
})

app.post('login',(req,res,next)=>{
    console.log("login");
})

app.listen(8000,()=>{
    console.log("普通中间件服务器启动");
})