"use strict";

var mysql2 = require("mysql2"); // 1.创建数据库连接


var connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "123456"
}); // 2.执行sql语句
// const statement = `select * from products`;
// connection.query(statement, (err, results, fields) => {
//   console.log(results);
//   connection.end()
// });

var statement = "select count(*) as a from products where price > ? ";
connection.execute(statement, [2], function (err, results, fields) {
  console.log(results);
  connection.destroy();
});