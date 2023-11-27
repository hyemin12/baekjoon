var fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let [num1, num2] = input[i].split(" ");

  const a = Number(num1);
  const b = Number(num2);

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
