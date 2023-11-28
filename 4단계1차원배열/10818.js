var input = require("fs").readFileSync("example.txt").toString().split("\n");

const arr = input[1].split(" ").map((e) => +e);

console.log(Math.min(...arr), Math.max(...arr));
