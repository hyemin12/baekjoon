var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((e) => +e);
const arr = [];

for (let i = 0; i < input.length; i++) {
  const result = Math.floor(input[i] % 42);
  arr.includes(result) ? arr : arr.push(result);
}
console.log(arr.length);
