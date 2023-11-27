var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const num = +input[0];

const sum = Array(num)
  .fill(1)
  .map((e, i) => e + i)
  .reduce((acc, cur) => (acc += cur));
console.log(sum);
