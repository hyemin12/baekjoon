var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");
const [a, b] = input;
const [c, d, e] = b;

console.log(+a * +e);
console.log(+a * +d);
console.log(+a * +c);
console.log(+a * +b);
