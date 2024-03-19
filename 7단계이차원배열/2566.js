var fs = require('fs');
const inputs = fs
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.replace('\r', '').split(' '));

let max = 0;
let position = [0, 0];

for (let i = 0; i < inputs.length; i++) {
	for (let j = 0; j < inputs[i].length; j++) {
		const num = Number(inputs[i][j]);
		if (num > max) {
			max = num;
			position = [i, j];
		}
	}
}
const [x, y] = position;

console.log(max);
console.log(x + 1, y + 1);
