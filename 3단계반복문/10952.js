var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ");
  console.log(+a + +b);
}
