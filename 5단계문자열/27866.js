var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [string, index] = input;

console.log(string[+index - 1]);
