var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");

let idx = 0;
let arr = [];
for (let i = 97; i <= 122; i++) {
  arr.push(input[idx].indexOf(String.fromCharCode(i)));
}
console.log(arr.join(" "));
