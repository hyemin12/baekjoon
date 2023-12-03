var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const gradeList = { "A+": 4.5, A0: 4.0, "B+": 3.5, B0: 3.0, "C+": 2.5, C0: 2.0, "D+": 1.5, D0: 1.0, F: 0.0 };

let totalScore = 0;
let ag = 0;
for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].split(" ");
  c = c.replace("\r", "");
  if (c === "P") continue;
  totalScore += b * scoreArr[c];
  ag += +b;
}

console.log(totalScore / ag);
