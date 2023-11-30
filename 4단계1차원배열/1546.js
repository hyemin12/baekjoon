var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const lists = input[1].split(" ").map((e) => Number(e));

const max = Math.max(...lists);
const sum = lists.reduce((acc, cur) => acc + (cur / max) * 100, 0);
console.log(sum / lists.length);
