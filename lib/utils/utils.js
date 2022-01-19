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

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};
module.exports = { compile, writeToFile };
