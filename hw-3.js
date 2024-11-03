// Задание 1

let password = 'пароль';
let enter = prompt('Введите пароль');

if (enter === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// Задание 2

let c = Number(prompt('Запишите любое число'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let d = Number(prompt('Запишите число d'));
let e = Number(prompt('Запишите число e'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4

let a = '2';
let b = '3';

alert((+a)+(+b))

// Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;        

    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
   
    default:
        console.log('Вы ввели что-то не то!');
        break;
}