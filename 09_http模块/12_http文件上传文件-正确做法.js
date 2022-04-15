
const http = require("http")
const fs = require("fs")
const qs = require("querystring")
//创建一个web服务器
const server = http.createServer((req, res) => {
    //图片文件必须设置编码 binary
    req.setEncoding("binary")

    const fileWriter = fs.createWriteStream("./foo.png", {
        flags: "a+"
    })
    let body = ""
    const totalBoundary = req.headers["content-type"].split(";")[1]
    const boundary = totalBoundary.split("=")[1]
    console.log(boundary);

    req.on("data", (data) => {
        body += data
    })

    req.on("end", () => {
        //1.获取image/png的位置  动态获取
        const payload = qs.parse(body, "\r\n", ": ")
        // console.log(payload);

        //2.开始在image/png位置截取
        const contentType = payload["Content-Type"]
        const typeIndex = body.indexOf(contentType)
        const typeLength = contentType.length
        let imageData = body.substring(typeIndex + typeLength)

        //3.将中间两个空格去掉
        imageData = imageData.replace(/^\s\s*/, '');

        //4.将最后的boundary取出
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        fs.writeFile("./foo.png", imageData, "binary", (err) => {
            if (err) {
                console.log(err);
                return
            }
            // console.log(imageData);
            console.log("文件上传成功！");
            res.end("文件上传成功！")
        })


    })
})


//启动服务器 并且指定端口及主机
server.listen(8000, "0.0.0.0", () => {
    console.log("服务器启动!");
})