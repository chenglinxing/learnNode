const program = require("commander");

const { createProjectAction, addComponentAction } = require("./actions");

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
      addComponentAction(name, "/src/components");
    });
};

module.exports = createCommands;
