const express = require("express")
const morgan = require("morgan")
const fs = require("fs")


//express 为一个函数
const app = express()

const writerStream = fs.createWriteStream("./logs/access.log", {
    flags: "a+"
})

app.use(morgan("combined", {
    stream: writerStream
}))


app.get("/home", (req, res, next) => {
    res.end("server")
})

//开启监听
app.listen(8000, () => {
    console.log("express服务启动");
})