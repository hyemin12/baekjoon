var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((e) => +e);
const arr = [];

for (let i = 1; i <= 30; i++) {
  input.includes(i) ? arr : arr.push(i);
}

arr.forEach((a) => console.log(a));
