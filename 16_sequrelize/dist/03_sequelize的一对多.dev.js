"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require("sequelize"),
    Sequelize = _require.Sequelize,
    DataTypes = _require.DataTypes,
    Model = _require.Model,
    Op = _require.Op;

var sequelize = new Sequelize("coderhub", "root", "123456", {
  port: 3306,
  dialect: "mysql"
});
sequelize.authenticate().then(function (res) {
  console.log(res, "连接成功");
})["catch"](function (err) {
  console.log(err, "连接失败");
});

var Brand =
/*#__PURE__*/
function (_Model) {
  _inherits(Brand, _Model);

  function Brand() {
    _classCallCheck(this, Brand);

    return _possibleConstructorReturn(this, _getPrototypeOf(Brand).apply(this, arguments));
  }

  return Brand;
}(Model);

Brand.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: DataTypes.STRING
}, {
  sequelize: sequelize,
  tableName: "brand",
  createdAt: false,
  updatedAt: false
});

var Product =
/*#__PURE__*/
function (_Model2) {
  _inherits(Product, _Model2);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, _getPrototypeOf(Product).apply(this, arguments));
  }

  return Product;
}(Model);

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.STRING,
  //两表连接
  brandId: {
    field: "brand_id",
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: "id"
    }
  }
}, {
  sequelize: sequelize,
  tableName: "products",
  createdAt: false,
  updatedAt: false
}); //将两张表联系到一起

Product.belongsTo(Brand, {
  foreignKey: "brandId"
});

function quertProducts() {
  var result;
  return regeneratorRuntime.async(function quertProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.findAll({
            include: {
              model: Brand
            }
          }));

        case 2:
          result = _context.sent;
          console.log(result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

quertProducts();