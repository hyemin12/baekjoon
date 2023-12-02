var fs = require("fs");
var input = fs.readFileSync("example.txt").toString();
const str = input.split("");
const left = str.slice(0, Math.floor(input.length / 2)).join("");
const right = str
  .slice(Math.ceil(input.length / 2))
  .reverse()
  .join("");

console.log(left, right, left === right ? 1 : 0);
