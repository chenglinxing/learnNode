const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

const { vueRepo } = require("../config/repo-config");

//callback -> promisify(函数) -> Promise -> async/await
const createProjectACtion = async (project) => {
  //1.clone项目
  await download(vueRepo, project, { clone: true });
  //2.执行 npm install

  //3.运行 npm run serve

  //4.打开浏览器
};

module.exports = { createProjectACtion };
