var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const year = Number(input);

console.log(year - 543);
