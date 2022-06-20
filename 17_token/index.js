const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("jsonwebtoken");
const fs = requrie("fs")

const app = new Koa();
const testRouter = new Router();

const PRIVATE_KEY = fs.readFileSync('./keys/private.key')
const PUBLIC_KEY =fs.readFileSync('./keys/public.key')

//登录
testRouter.post("/test", (ctx, next) => {
  const user = { id: 10, name: "why" };
  const token = jwt.sign(user,PRIVATE_KEY , {
    expiresIn: 20,
    algorithm:"RS256"
  });
  ctx.body = token;
});

//验证
testRouter.post("/demo", (ctx, next) => {
  console.log(ctx.headers.authorization);
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  try {
    const result = jwt.verify(token,PUBLIC_KEY,{
        algorithm:["RS256"]
    } );
    ctx.body = result;
  } catch (error) {
    console.log(error.message);
  }
});
app.use(testRouter.routes());

app.listen(5000, () => {
  console.log("服务器启动成功！");
});
