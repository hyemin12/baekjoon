var input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((e) => +e);

const max = Math.max(...input);
const index = input.indexOf(max);
console.log(max, index + 1);
