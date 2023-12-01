var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");
const [a, b] = input;

const num1 = a.split("").reverse().join("");
const num2 = b.split("").reverse().join("");

console.log(Math.max(+num1, +num2));
