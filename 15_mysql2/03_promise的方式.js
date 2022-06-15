const mysql2 = require("mysql2");

//1.创建连接池
const connections = mysql2.createPool({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "123456",
  connectionLimit: 10,
});

// 2.使用连接池
const statement = `select count(*) as a from products where price > ? `;

connections.promise()
  .execute(statement, [2])
  .then(([results]) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
