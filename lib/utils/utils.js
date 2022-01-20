const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

//创建模板
const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }

      resolve(result);
    });
  });
};

//创建文件夹
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName);
      return true;
    }
  }
};

const writeToFile = (path, content) => {
  // 判断当前路径是否存在 如果不存在 创建对应的文件夹
  return fs.promises.writeFile(path, content);
};
module.exports = { compile, writeToFile, createDirSync };
