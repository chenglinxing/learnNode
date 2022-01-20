const program = require("commander");
console.log(program.dest,'program.dest');
const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
} = require("./actions");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone a reponsitory into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <componentName>")
    .description(
      "add vue component,例如：why addcpn helloWord.vue -d src/components"
    )
    .action((name) => {
      addComponentAction(name, program.opts().dest || "src/components");
    });

  program
    .command("addpage <page>")
    .description(
      "add vue page and router config,例如 why addpage Home [-d src/pages]"
    )
    .action((page) => {
      addPageAndRouteAction(page, program.opts().dest || "src/pages");
    });

  program
    .command("addstore <store>")
    .description(
      "add vue page and router config,例如 why addpage Home [-d src/store/modules]"
    )
    .action((store) => {
      addStoreAction(store,program.opts().dest || "src/store/modules");
    });
};

module.exports = createCommands;
