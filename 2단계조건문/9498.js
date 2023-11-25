var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const [num1] = input;

const fn = (a) => {
  const num = +a;
  if (num >= 90) return "A";
  if (num >= 80) return "B";
  if (num >= 70) return "C";
  if (num >= 60) return "D";
  return "F";
};
console.log(fn(num1));
