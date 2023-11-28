var input = require("fs").readFileSync("example.txt").toString().split("\n");

const [x, n] = input[0].split(" ");
const arr = input[1].split(" ");

let result = "";
for (i = 0; i < Number(x); i++) {
  if (arr[i] < Number(n)) {
    result += arr[i] + " ";
  }
}
console.log(result);
