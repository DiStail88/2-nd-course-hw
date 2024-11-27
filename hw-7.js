// Задание 1
let str1 = 'js';
let str1Big = str1.toUpperCase();
console.log(str1Big);
// Задание 2
function newArr(arr1, str) {
    arr1.forEach((arrel) => {
        if (arrel.toLowerCase().startsWith(str.toLowerCase())){
            console.log(arrel);
        }
    })
}
// Задание 3
let num = 32.58884;
const small = Math.floor(num);
const big = Math.ceil(num);
const near = Math.round(num);
// Задание 4
const arr2 = [52, 53, 49, 77, 21, 32]
const max = Math.max(...arr2);
const min = Math.min(...arr2);
console.log(max);
console.log(min);
// Задание 5
function random() {
    const num = Math.floor(Math.random() * 11);
    console.log(num);
}
// Задание 6
function arrNum(num) {
    const length = num;
    return Array.from({length: length/2}, () => Math.floor(Math.random() * num))
}
// Задание 7
function randomRange(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
// Задание 8
let myDate = new Date(); 
console.log(myDate);
// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
// Задание 10
const monthsRussian = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];
  
  function formatDate(date) {
      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();
      let weekday = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'][date.getDay()];
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `Дата: ${day} ${monthsRussian[monthIndex]} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
  }
  
  let curDate = new Date();
  console.log(formatDate(curDate));



