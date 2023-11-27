var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");
const max = input[0];

for (let i = 1; i <= max; i++) {
  const [a, b] = input[i].split(" ");
  console.log(Number(a) + Number(b));
}
