const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
    const isLogin = false
    if (!isLogin) {
        ctx.app.emit("err", new Error("未登录！"), ctx)
    }
})

app.on("err",(err,ctx)=>{
    console.log(err);
    ctx.status = 401
    ctx.body = err.message
})

app.listen(8000, () => {
    console.log("koa错误处理");
})