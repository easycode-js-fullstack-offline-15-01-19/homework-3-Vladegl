// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------

// Циклы. Задачи.

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.


let str = 'i am in the easycode';
let newStr = '';

for (let i = 0; i < str.length; i++) {
	if (str[i-1] === ' ' || i === 0) {
		newStr += str[i].toUpperCase();
	} else {
		newStr += str[i];
	}
}

console.log(newStr);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str2 = 'tseb eht ma i';
let newStr2 = '';

for (let i = str2.length - 1; i >= 0; i--) {
	newStr2 += str2[i];
}

console.log(newStr2);

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let variable = 10;
let factorial = 1;

for (let i = 2; i < variable + 1; i++) {
	factorial *= i; 
}

console.log(factorial);


// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str3 = 'JavaScript is a pretty good language';
let newStr3 = '';

for (let i = 0; i < str3.length; i++) {

	if (str3[i-1] === ' ' || i === 0) {
		newStr3 += str3[i].toUpperCase();
	} else if (str3[i] === ' ') {

	} 
	else {
		newStr3 += str3[i];
	}

}

console.log(newStr3);

// 5. Найти все нечетные числа в массиве от 1 до 15 
//	включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let number of numbers) {
	if (number % 2 !== 0) {
	console.log(number);
	}
}

// 6. Дан объект:

let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
}

//Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (let key in list) {
	if(typeof list[key] === 'string') {
		list[key] = list[key].toUpperCase();
}
console.log(list[key]);
}

console.log(list);