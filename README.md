var fs = require('fs');
const inputs = fs
.readFileSync('example.txt')
.toString()
.trim()
.split('\n')
.map((e) => e.replace('\r', '').split(' '))

백준 제출
var fs = require('fs');
const inputs = fs
.readFileSync('dev/stdin')
.toString()
.trim()
.split('\n')
.map((e) => e.replace('\r', '').split(' '))
