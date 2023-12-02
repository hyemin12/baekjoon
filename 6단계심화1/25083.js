var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((e) => +e);

const arr = [1, 1, 2, 2, 2, 8];

const res = arr.map((a, i) => a - input[i]);
console.log(res.join(" "));
