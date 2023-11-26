var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");
let [a, b] = input[0].split(" ").map((e) => +e);
let c = Number(input[1]);

h = Math.floor((a * 60 + b + c) / 60);
m = (a * 60 + b + c) % 60;
if (h >= 24) {
  h -= 24;
}

console.log(h, m);
