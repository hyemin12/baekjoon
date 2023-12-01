var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");

input.forEach((w) => console.log(w.replace("\r", "")));
