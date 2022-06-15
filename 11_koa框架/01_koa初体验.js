const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
    console.log("中间件被执行");
    ctx.response.body = "123"
})

app.listen(8000, () => {
    console.log("koa初体验");
})