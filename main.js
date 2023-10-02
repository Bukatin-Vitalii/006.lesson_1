// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 'a', 1, 'b', 'f', true, '3'];

function average(arr) {
	let sum = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			sum += arr[i];
			count++;
		}
	}
	return sum / count;
}

console.log(average(arr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt('Enter x');
let znak = prompt('Enter znak');
let y = +prompt('Enter y');

function doMath(x, znak, y) {
	switch (znak) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
		case '%':
			return x % y;
		case '^':
			return x ** y;
		default:
			return 'Error';
	}
}

alert(doMath(x, znak, y));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let arr2 = [];
let n = +prompt('Введите длину основного массива');
let m = +prompt('Введите длину внутренних массивов');

function fillArray(arr2, n, m) {
	for (let i = 0; i < n; i++) {
		arr2[i] = [];
		for (let j = 0; j < m; j++) {
			arr2[i][j] = prompt('Введите элемент массива');
		}
	}
	return arr2;
}

console.log(fillArray(arr2, n, m));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let str = prompt('Введите строку');
let arr3 = prompt('Введите символы через пробел').split(' ');

function deleteSymbols(str, arr3) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (!arr3.includes(str[i])) {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(deleteSymbols(str, arr3));