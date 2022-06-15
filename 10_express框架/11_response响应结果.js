const express = require("express")

//express 为一个函数
const app = express()


app.get("/user",(req,res,next)=>{
    // res.type("application/json")
    // res.end(JSON.stringify({name:1,age:20}))  

    //设置响应码
    // res.status(204)
    // res.json({a:1})
    // res.redirect('http://google.com')
    res.send('<p>some html</p>')
})

//开启监听
app.listen(8000,()=>{
    console.log("express服务启动");
})