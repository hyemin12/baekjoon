var fs = require("fs");
var input = fs.readFileSync("example.txt").toString();
const num = Number(input);

for (let i = 1; i < num; i++) {
  const space = " ".repeat(num - i);
  const start = "*".repeat(i + (i - 1));
  console.log(space, start);
}
for (let j = num; j > 0; j--) {
  const space = " ".repeat(num - j);
  const start = "*".repeat(j + (j - 1));
  console.log(space, start);
}
