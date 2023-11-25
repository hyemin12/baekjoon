var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const [num1, num2] = input;

const compareFn = (a, b) => {
  if (+a > +b) return ">";
  if (+a < +b) return "<";
  return "==";
};
console.log(compareFn(num1, num2));
