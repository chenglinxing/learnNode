const express = require("express")
const multer = require("multer")
const path = require("path")

const app = express()

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
    // dest: "./uploads/ "
    storage
})
app.use(upload.any())

app.post("/login", (req, res, next) => {
    console.log(req.body);
})

app.post("/upload", upload.array("file"), (req, res, next) => {
    res.end("上传成功")
})

app.listen(8000, () => {
    console.log("服务开启成功！");
})