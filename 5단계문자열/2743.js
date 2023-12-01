var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");
const [string] = input;

console.log(string.trim().length);
