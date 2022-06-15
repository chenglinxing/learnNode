"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var sequelize = new Sequelize("coderhub", "root", "123456", {
  port: 3306,
  dialect: "mysql"
});
sequelize.authenticate().then(function (res) {
  console.log(res, "连接成功");
})["catch"](function (err) {
  console.log(err, "连接失败");
});