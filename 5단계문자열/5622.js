var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("");

let t = 0;

input.forEach((w) => {
  if (w === "A" || w === "B" || w === "C") {
    t += 3;
  } else if (w === "D" || w === "E" || w === "F") {
    t += 4;
  } else if (w === "G" || w === "H" || w === "I") {
    t += 5;
  } else if (w === "J" || w === "K" || w === "L") {
    t += 6;
  } else if (w === "M" || w === "N" || w === "O") {
    t += 7;
  } else if (w === "P" || w === "Q" || w === "R" || w === "S") {
    t += 8;
  } else if (w === "T" || w === "U" || w === "V") {
    t += 9;
  } else if (w === "W" || w === "X" || w === "Y" || w === "Z") {
    t += 10;
  }
});

console.log(t);
