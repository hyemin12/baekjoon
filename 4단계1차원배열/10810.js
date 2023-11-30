var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [a, b] = input[0].split(" ").map((e) => Number(e));

const arr = Array(a).fill(0);

for (let i = 1; i <= b; i++) {
  const [a, b, c] = input[i].split(" ").map((e) => Number(e));
  for (let j = a; j <= b; j++) {
    arr[j - 1] = c;
  }
}
console.log(arr.join(" "));
