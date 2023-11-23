var fs = require("fs");
var input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((e) => +e);
const [num1, num2, num3] = input;

console.log(num1 + num2 + num3);
