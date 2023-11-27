var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const num = +input[0];

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i} `);
}
