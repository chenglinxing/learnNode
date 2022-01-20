const program = require("commander");

const helpOptions = () => {
  //增加options
  program.option("-w, --why", "a why cli");

  program.option(
    "-d --dest <dest>",
    "a destnation folder,例如： -d /src/component"
  );

  program.option("-f --framework <framework>", "your framework name");

  program.on("--help", () => {
    console.log();
    console.log("Other:");
    console.log("  other options");
  });

};

module.exports = helpOptions;
