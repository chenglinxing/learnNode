const Koa = require("koa")
const staticAssets = require("koa-static")


const app = new Koa()


app.use(staticAssets("./build"))
app.use((ctx, next) => {
    console.log("中间件被执行");
    ctx.response.body = "123"
})

app.listen(8000, () => {
    console.log("部署静态资源");
})