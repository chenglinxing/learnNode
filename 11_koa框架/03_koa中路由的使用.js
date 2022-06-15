const Koa = require("koa")

const UserRouter = require("./router/user")

const app = new Koa()

app.use((ctx, next) => {
    // ctx.response.body = "hello world"
    next()
})

app.use(UserRouter.routes())
//allowedMethods 判断方法是否支持
app.use(UserRouter.allowedMethods())

app.listen(8000, () => {
    console.log("koa初体验");
})