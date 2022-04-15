const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("第一个");
    next()
})

app.get('/home', (req, res, next) => {
    console.log("home 01");
    next()
}, (req, res, next) => {
    console.log("home 02");
    next()
}, (req, res, next) => {
    console.log("home 03");
    next()
}, (req, res, next) => {
    console.log("home 04");
})

app.listen(8000, () => {
    console.log("普通中间件服务器启动");
})