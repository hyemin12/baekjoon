var input = require("fs").readFileSync("example.txt").toString().split("\n");

const a = input[0];
const arr = input[1].split(" ");
const b = input[2];

let result = 0;
for (i = 0; i < a; i++) {
  if (arr[i] === b) {
    result++;
  }
}
console.log(result);
