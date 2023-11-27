var fs = require("fs");
var input = fs.readFileSync("예제.txt").toString().split("\n");
const numlist = input;

numlist.forEach((n) => {
  const arr = n.split(" ").map((e) => +e);
  if (arr.length > 1) {
    const [a, b] = arr;
    console.log(a + b);
  }
});
