const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
    console.log("中间件被执行");
    // ctx.response.body = "123"
    if (ctx.request.url === "/login") {
        if (ctx.request.method === "GET") {
            console.log("11111111");
            ctx.response.body = "login success"
        }
    } else {
        ctx.response.body = "other request"
    }
})

app.listen(8000, () => {
    console.log("koa中间件");
})