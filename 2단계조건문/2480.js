var fs = require("fs");
var input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((e) => +e);
const [a, b, c] = input;

const fn = (a, b, c) => {
  if (a === b && b === c) return 10000 + a * 1000;
  if (a === b || a === c) return 1000 + a * 100;
  if (b === c) return 1000 + b * 100;
  return Math.max(a, b, c) * 100;
};
console.log(fn(a, b, c));
