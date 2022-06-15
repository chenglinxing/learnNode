const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const Router = require("koa-router")
const multer = require("koa-multer")

const app = new Koa()
const router = new Router({
    prefix: "/users"
})
const upload = multer()
app.use(upload.any())

app.use(bodyParser())
// router.get("/:id", (ctx, next) => {
//     console.log(ctx.request.params);
//     console.log(ctx.request.query);
// })

// app.use((ctx, next) => {
//     console.log(ctx.request.body);
//     ctx.response.body = "hello world"
// })
router.post("/", (ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.request.body);
    ctx.response.body = "hello world"
})

app.use(router.routes())
app.listen(8000, () => {
    console.log("服务器解析");
})