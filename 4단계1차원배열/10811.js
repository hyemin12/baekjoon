var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [a, b] = input[0].split(" ").map((e) => +e);
let arr = Array(a)
  .fill(0)
  .map((_, i) => i + 1);

for (let i = 1; i <= b; i++) {
  const [c, d] = input[i].split(" ").map((e) => +e);

  const before = arr.slice(0, c - 1);
  const rev = arr.slice(c - 1, d).reverse();
  const after = arr.slice(d);
  arr = [...before, ...rev, ...after];
}
console.log(arr.join(" "));
