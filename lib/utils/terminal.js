/**
 * 执行终端相关命令的代码
 */

const { spawn } = require("child_process");

const commandSpawn = (...args) => {
  return new Promise((resole, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resole();
    });
  });
};

module.exports = { commandSpawn };
