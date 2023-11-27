var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const max = +input[0];
for (let i = 1; i <= max; i++) {
  console.log(" ".repeat(max - i) + "*".repeat(i));
}
