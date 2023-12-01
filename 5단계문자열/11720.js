var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [_, list] = input;

const result = list.split("").reduce((acc, cur) => (acc += +cur), 0);
console.log(result);
