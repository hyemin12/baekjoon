var fs = require('fs');
const inputs = fs
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.split(' ').map((n) => Number(n)));

inputs.shift();
const array = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let l = 0; l < inputs.length; l++) {
	const [x, y] = inputs[l];
	for (let i = y; i < y + 10; i++) {
		for (let j = x; j < x + 10; j++) {
			if (array[j][i] === 0) {
				array[j][i] = 1;
				count++;
			}
		}
	}
}

console.log(count);
