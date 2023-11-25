var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const [num1] = input;
const num = +num1;

console.log(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0) ? 1 : 0);
