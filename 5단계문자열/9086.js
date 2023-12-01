var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  const newStr = input[i].replace("\r", "");
  console.log(newStr[0] + newStr.at(-1));
}
