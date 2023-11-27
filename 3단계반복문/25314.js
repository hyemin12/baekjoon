var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const num = +input[0];

console.log(`${"long ".repeat(num / 4)}int`);
