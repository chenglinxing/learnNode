const express = require("express")

const app = express()

const USERNAME_LOGIN = "USERNAME_LOGIN"

app.post("/login", (req, res, next) => {
    let isLogin = false
    if (isLogin) {
        res.end("登陆成功")
    } else {
        next(USERNAME_LOGIN)
    }
})


app.use((err, req, res, next) => {
    console.log(err);
    res.end(err)
})
app.listen(8000, () => {
    console.log("路由服务器启动");
})