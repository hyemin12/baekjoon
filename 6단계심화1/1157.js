var fs = require("fs");
var input = fs.readFileSync("example.txt").toString();

const arr = {};

for (let i = 0; i < input.length; i++) {
  arr[input[i]] ? (arr[input[i]] += 1) : (arr[input[i]] = 1);
}

let result = "";
let count = 0;
for (char in arr) {
  if (arr[char] === count) {
    result = "?";
    break;
  }
  if (arr[char] > count) {
    count = arr[char];
    result = char.toUpperCase();
  }
}
console.log(result);
