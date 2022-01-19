const { promisify } = require("util");
const download = promisify(require("download-git-repo")); //下载git指定仓库
const open = require("open"); //打开浏览器
const path = require("path");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { compile, writeToFile } = require("../utils/utils");

//callback -> promisify(函数) -> Promise -> async/await
// 创建项目
const createProjectAction = async function (project) {
  console.log("why helps you create your project");
  //1.clone项目
  await download(vueRepo, project, { clone: true });

  //2.执行 npm install
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  //3.运行 npm run serve
  await commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });

  //4.打开浏览器
  open("http://localhost:8080/");
};

//添加组价的action
const addComponentAction = async (name, dest) => {
  console.log(name,dest);
  //1.变异ejs模板写入到.vue文件中
  const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() });
  //2.写入文件的操作
  const targetPath = path.resolve(dest, `${name}.vue`);
  console.log(targetPath,'targetPath');
  writeToFile(targetPath,result)
};
module.exports = { createProjectAction, addComponentAction };
