"use strict";

var Koa = require("koa");

var Router = require("koa-router");

var jwt = require("jsonwebtoken");

var fs = requrie("fs");
var app = new Koa();
var testRouter = new Router();
var PRIVATE_KEY = fs.readFileSync('./keys/private.key');
var PUBLIC_KEY = fs.readFileSync('./keys/public.key'); //登录

testRouter.post("/test", function (ctx, next) {
  var user = {
    id: 10,
    name: "why"
  };
  var token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 20,
    algorithm: "RS256"
  });
  ctx.body = token;
}); //验证

testRouter.post("/demo", function (ctx, next) {
  console.log(ctx.headers.authorization);
  var authorization = ctx.headers.authorization;
  var token = authorization.replace("Bearer ", "");

  try {
    var result = jwt.verify(token, PUBLIC_KEY, {
      algorithm: ["RS256"]
    });
    ctx.body = result;
  } catch (error) {
    console.log(error.message);
  }
});
app.use(testRouter.routes());
app.listen(5000, function () {
  console.log("服务器启动成功！");
});