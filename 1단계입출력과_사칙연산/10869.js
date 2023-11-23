var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const [num1, num2] = input;

console.log(+num1 + +num2);
console.log(+num1 - +num2);
console.log(+num1 * +num2);
console.log(Math.floor(+num1 / +num2));
console.log(Math.floor(+num1 % +num2));
