const { Sequelize, DataTypes, Model, Op } = require("sequelize");

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

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.STRING,
    // score: DataTypes.DOUBLE,
  },
  {
    sequelize,
    tableName: "products",
    createdAt: false,
    updatedAt: false,
  }
);

async function quertProducts() {
  // 1.查询product表的所有内容
  //   const result = await Product.findAll({
  //     where: {
  //       price: {
  //         [Op.gte]: 5000,
  //       },
  //     },
  //   });
  //   console.log(result);

  //2.插入数据
  //   const result = await Product.create({
  //     title: "三星Nova",
  //     price: 8000,
  //   });

  // 3.更新数据
  const result = await Product.update(
    {
      price: 3688,
    },
    {
      where: {
        id: 1,
      },
    }
  );
  console.log(result);
}

quertProducts();
