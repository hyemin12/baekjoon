var fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let [a, b] = input[i].split(" ");

  console.log(`Case #${i}: ${Number(a) + Number(b)}`);
}
