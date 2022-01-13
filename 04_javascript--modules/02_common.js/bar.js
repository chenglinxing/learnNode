const name = "kobe";
const age = "30";

let message = "my name is " + name;

function sayHello(name) {
  console.log("name:" + name);
}

exports.name = name;
exports.age = age;
exports.sayHello = sayHello;
