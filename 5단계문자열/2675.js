var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
const [length] = input;

for (let i = 1; i <= length; i++) {
  const [count, string] = input[i].split(" ");
  console.log(
    string
      .replace("\r", "")
      .split("")
      .map((a) => a.repeat(+count))
      .join("")
  );
}
