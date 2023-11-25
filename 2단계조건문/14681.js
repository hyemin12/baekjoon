// var fs = require("fs");
// var input = fs
//   .readFileSync("예제.txt")
//   .toString()
//   .split("\n")
//   .map((e) => +e);
// const [a, b] = input;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  const fn = (a, b) => {
    if (a > 0 && b > 0) return 1;
    if (a < 0 && b > 0) return 2;
    if (a < 0 && b < 0) return 3;
    return 4;
  };
  console.log(fn(a, b));
  process.exit();
});
