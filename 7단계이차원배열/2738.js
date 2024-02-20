var fs = require('fs');
const inputs = fs
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.split(' ').map((v) => Number(v)));
const [n, m] = inputs.shift();

const answerArr = [];

for (let i = 0; i < n; i++) {
	const currentLine = inputs[i];
	const nextLine = inputs[i + n];
	const result = currentLine.map((a, j) => a + nextLine[j]);
	answerArr.push(result);
}

const answer = answerArr.map((a) => a.join(' ')).join('\n');
console.log(answer);

// 방법2
// const arr = new Array(m).fill().map(() => new Array(n).fill(0));

// for (let i = 0; i < n; i++) {
// 	for (let j = 0; j < m; j++) {
// 		arr[i][j] = inputs[i][j] + inputs[i + n][j];
// 	}
// }
// const answer2 = arr.map((a) => a.join(' ')).join('\n');
// console.log(answer2);
