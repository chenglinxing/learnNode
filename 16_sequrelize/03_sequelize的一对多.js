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

class Brand extends Model {}
Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "brand",
    createdAt: false,
    updatedAt: false,
  }
);

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

    //两表连接
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER,
      references: {
        model: Brand,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "products",
    createdAt: false,
    updatedAt: false,
  }
);

//将两张表联系到一起
Product.belongsTo(Brand, {
  foreignKey: "brandId",
});

async function quertProducts() {
  const result = await Product.findAll({
    include: {
      model: Brand,
    },
  });
  console.log(result);
}

quertProducts();
