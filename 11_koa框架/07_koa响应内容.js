const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
    console.log("中间件被执行");
    //设置状态码
    // ctx.status = 205
    // ctx.response.body = [{
    //     a: 1
    // }, "abc"]
    ctx.body = "123"

})


app.listen(8000, () => {
    console.log("07_koa响应内容");
})