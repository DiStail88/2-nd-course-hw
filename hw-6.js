// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr1[i])
  if (arr1[i] === 10) {
    break;
  }
}
// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
arr2.forEach((el, index) => {
  if (el === 4) {
    console.log(index)
  }
});
// Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));
// Задание 4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    const arrLn = [];
    for (let j = 0; j < 3; j++) {
        arrLn.push(1);
    }
    arr4.push(arrLn)
}
console.log(arr4);
// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);
// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);
// Задание 7
const arr7 = [9, 8, 7, 6, 5];
userAnswer = Number(prompt('Угадайте число!'))
if (arr7.includes(userAnswer) === true) {
  alert ('Угадал');
} else {
  alert ('Не угадал');
}
// Задание 8
let str = 'abcdef';
const arr8 = str.split('');
arr8.reverse();
console.log(arr8.join(''));
// Задание 9
const arr9 = [[1, 2, 3],[4, 5, 6]];
console.log([...arr9[0],...arr9[1]]);
// Задание 10
const arr10 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
for (i = 0; i < arr10.length; i++){
  arr10[i]=arr10[i]+arr10[i+1];
}
arr10.pop();
console.log(arr10);
// Задание 11
const arr11 = [5, 5, 5, 5, 5];
function map1(arr) {
  arrSquare = arr.map(el => el*el);
  return arrSquare;
}
console.log(map(arr11));
// Задание 12
arr12 = ['арбуз', 'мандарин', 'киви']
function map2(arr) {
  arrSquare = arr.map(el => el.length);
  return arrSquare;
}
console.log(map(arr12));
// Задание 13
const arr13 = [5, -5, 5, -5, 5];
function filter(arr) {
  arrMinus = arr.filter(el => el < 0);
  return arrMinus;
}
console.log(map(arr13));
// Задание 14
const arr14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
console.log(arr14);
arrEvenNumbered = arr14.filter(el => el % 2 === 0);
console.log(arrEvenNumbered);
// Задание 15
const arr15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 11));
const sum = arr15.reduce((el, arr15) => el + arr15, 0);
console.log(sum/6);
