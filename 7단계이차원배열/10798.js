var fs = require('fs');
const inputs = fs
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.replace('\r', '').split(' '))
	.flat();

const maxLength = Math.max(...inputs.map((i) => i.length));
let answer = '';

for (let i = 0; i < maxLength; i++) {
	for (let j = 0; j < inputs.length; j++) {
		if (inputs[j][i]) {
			answer += inputs[j][i];
		}
	}
}
console.log(answer);
