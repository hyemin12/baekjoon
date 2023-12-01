var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");

console.log(input[0].charCodeAt());
