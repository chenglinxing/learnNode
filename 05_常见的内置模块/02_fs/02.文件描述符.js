const fs = require("fs");

// fs.promises.open().then

fs.open("./a.txt", (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info);
  fs.fstat(info, (err, res) => {
    console.log(res, "res");
  });
});

