const Koa = require("koa")
const Router = require("koa-router")
const multer = require("koa-multer")
const path = require("path")

const app = new Koa()
const uploadRouter = new Router({
    prefix: "/upload"
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({
    // dest: "./uploads/"
    storage
})


uploadRouter.post("/", upload.single("pic"), (ctx, next) => {
    console.log(ctx.req.file);
    ctx.response.body = "上传成功！"
})

app.use(uploadRouter.routes())
app.listen(8000, () => {
    console.log("服务器解析");
})