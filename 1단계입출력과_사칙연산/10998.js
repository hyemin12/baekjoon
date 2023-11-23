var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split(" ");
const [num1, num2] = input;

console.log(+num1 * +num2);
