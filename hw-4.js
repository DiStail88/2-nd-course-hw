// Задание 1

for (let hi = 0; hi < 2; hi++) {
    console.log('Привет');
}

// Задание 2

let n = 1; 

while (n<=6) {
    console.log(n); 
    n++;
    if (n === 6){
      break;
    }
}

// Задание 3

let k = 7; 
while (k<=23) {
    console.log(k); 
    k++; 
    if (k === 23){
      break;
    }
}

// Задание 4

const obj = {
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}
  
for (let key in obj){
    console.log(`${key}:${obj[key]}`);
}


// Задиние 5

for (let n = 1000, num = 0; n > 50; num++) {
    n/=2;
    l = n;
    t = num;
}
console.log(l);
console.log(t);

// Задиние 6

let friday = 4;

while (friday < 31){
  console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
  friday+=7;
}