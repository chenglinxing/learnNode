const express = require("express")

const app = express()

app.use((req,res,next)=>{
    console.log("第一个");
    next()
   
})

app.use('/home',(req,res,next)=>{
    console.log("第二个");
    next()
    res.end("1")
})

app.use((req,res,next)=>{
    console.log("第三个");
})

app.listen(8000,()=>{
    console.log("普通中间件服务器启动");
})