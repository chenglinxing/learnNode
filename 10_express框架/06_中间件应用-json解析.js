const express = require("express")

const app = express()

// app.use((req, res, next) => {
// //    console.log(req.headers);
//    if(req.headers["content-type"] === "application/json"){
//        req.on("data",(data)=>{
//            const info = JSON.parse(data.toString())
//            req.body = info
//        })

//        req.on("end",()=>{
//            next()
//        })
//    }
// })

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//extended
//true:解析时使用的第三方库为 qs
//false:使用的是node的内置模块 querystring 



app.post("/login", (req, res, next) => {
    console.log(req.body);
})

app.post("/products", (req, res, next) => {
    console.log(req.body);
})

app.listen(8000, () => {
    console.log("普通中间件服务器启动");
})