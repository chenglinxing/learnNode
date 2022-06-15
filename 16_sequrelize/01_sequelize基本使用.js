const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "123456", {
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((res) => {
    console.log(res, "连接成功");
  })
  .catch((err) => {
    console.log(err, "连接失败");
  });
