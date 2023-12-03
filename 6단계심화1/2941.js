var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim();

const strArr = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a");

console.log(strArr.length);
