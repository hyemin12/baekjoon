var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [a, b] = input[0].split(" ").map((e) => Number(e));

const arr = Array(a)
  .fill(1)
  .map((_, i) => i + 1);

for (let i = 1; i <= b; i++) {
  const [c, d] = input[i].split(" ").map((e) => Number(e));
  const num = arr[c - 1];
  arr[c - 1] = arr[d - 1];
  arr[d - 1] = num;
}
console.log(arr.join(" "));
