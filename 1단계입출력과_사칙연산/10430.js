var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split(" ");
const numlist = input.map((e) => +e);
const [a, b, c] = numlist;

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
