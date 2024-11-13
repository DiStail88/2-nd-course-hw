// Задание 1

function minNumber(number1, number2) {
    if (number1 > number2) {
        return number2;
    } else{
        return number1;
    }
}

// Задание 2

function evenOdd(number) {
    if (number % 2 == 0) {
        return 'Число четное';
    } else{
        return 'Число нечетное';
    }
}

// Задание 3

function squareConsole(number) {
    console.log(number*number);
}

function square(number) {
    return number*number;
}

// Задание 4

function age() {
    let age = Number(prompt('Сколько вам лет?'));
    if (!isNaN(age)) {
        if (age < 0) {
            alert('Вы ввели неправильное значение');
          } else if (age >= 0 && age <= 12) {
            alert('Привет, друг!');
          } else {
            alert('Добро пожаловать!');
          }
    } else{
        return 'Вы ввели неправильное значение';
    }
}

// Задание 5

function algorithm(param1, param2) {
    if (!isNaN(param1) && !isNaN(param2)) {
        return param1*param2;
    } else{
        return 'Одно или оба значения не являются числом';
    }
}

// Задание 6

function algorithm() {
    let number = Number(prompt('Введите число'));
    if (!isNaN(number)) {
        let cube = number*number*number;
        alert(`n в кубе равняется ${cube}`);
    } else {
        alert('Переданный параметр не является числом');
    }
}

// Задание 7

const circle1 = {
    radius: 10,
    getArea() {
      const pi = 3.14;
      return pi*circle1.radius*circle1.radius;
    },
    getPerimeter() {
      const pi = 3.14;
      return 2*pi*circle1.radius;
    }
}

const circle2 = {
    radius: 30,
    getArea() {
        const pi = 3.14;
        return pi*circle2.radius*circle2.radius;
    },
    getPerimeter() {
        const pi = 3.14;
        return 2*pi*circle2.radius;
    }
}