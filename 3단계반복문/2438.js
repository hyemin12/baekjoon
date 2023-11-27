var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");

for (let i = 1; i <= +input[0]; i++) {
  console.log("*".repeat(i));
}
