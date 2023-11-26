var fs = require("fs");
var input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((e) => +e);
const [h, m] = input;

const hour = h === 0 ? 24 : h;
if (m < 45) {
  const gap = 60 + m - 45;
  console.log(hour - 1, gap);
} else {
  console.log(h, m - 45);
}
