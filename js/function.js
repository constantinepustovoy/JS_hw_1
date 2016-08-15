// alert('hello world');
// console.log(alert)

var number = prompt('Укажите число', 1);
console.log(typeof number);
var number = parseInt(number);
console.log(typeof number);
console.log(number);
var grade = prompt('Укажите степерь возведения', 1);
var grade = parseInt(grade);
console.log(grade);
var i = 0;
var result = number;

function pow(number, grade, i, result) {
	if (number > 0 && grade > 0) {
		for (var i = 0; i <= grad; i++) {
			alert(i);
		result = result * number;
		return result;
		}
	} else if (grade == 0) {
		result = 1;
		return result;
	} else if (number == 0){
		result = 0;
		return result
	} else if (grade < 0){
		while (i <= grade) {
		result *= number;
		i++;
	}
		result = 1 / result;
		return result;
	}

}
	console.log(result);
