var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");
const price = +input[0];
const length = +input[1];
const sum = input.slice(2).reduce((acc, cur) => {
  const [a, b] = cur.split(" ").map((e) => +e);
  return (acc += a * b);
}, 0);

console.log(price === sum ? "YES" : "NO");
