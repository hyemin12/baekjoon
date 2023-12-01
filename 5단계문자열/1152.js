var fs = require("fs");
var input = fs.readFileSync("example.txt").toString();

console.log(
  input
    .trim()
    .split(" ")
    .filter((a) => a !== "").length
);
