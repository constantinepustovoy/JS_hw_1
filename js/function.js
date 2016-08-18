// alert('hello world');
// console.log(alert)

var number = prompt('Укажите число', 1);
var number = parseInt(number);
console.log(number);
var grade = prompt('Укажите степерь возведения', 1);
var grade = parseInt(grade);
console.log(grade);

function pow(number, grade) {
	var result = 1;
	if (number === 0) {
		return 0
		} else  if (grade === 0) {
		return 1;
	} 
	
	for (var i = 0; i < Math.abs(grade); i++) {
		result = result * number;
	}

	if (grade < 0) {
		result = 1/result;
	}
	return result
	}

	pow(number, grade);
	console.log( pow(number, grade) );
	