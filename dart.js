function getInfo(id, name, gender, course) {
	return {
		id,
		name,
		gender,
		course,
		complete: false,
	};
}
const student = getInfo(20, '공갈치', 'male', 'typescript');

function setInfo(student) {
	// 데이터베이스에 데이터 세팅하는 로직...
	console.log(student);
}

setInfo(student);
