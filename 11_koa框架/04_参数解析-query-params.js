const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()
const router = new Router({
    prefix: "/users"
})

router.get("/:id", (ctx, next) => {
    console.log(ctx.request.params);
    console.log(ctx.request.query);
})

// app.use((ctx, next) => {
//     console.log(ctx.request.url);
//     console.log(ctx.request.method);
//     console.log(ctx.request.query);
//     ctx.response.body = "hello world"
// })


app.use(router.routes())
app.listen(8000, () => {
    console.log("服务器解析");
})