function randomNumber() {
    alert("Попробуй угадать случайное число, удачи!");
    const number = Math.floor(Math.random() * 101);
    let userAnswer;
    while (userAnswer !== number) {
        userAnswer = Number(prompt("Твой вариант?"));
        if (number === userAnswer) {
            alert("Урааа, ты справился! Ждем тебя еще! 😉");
            break;
        } else {
            if (number > userAnswer) {
                alert("Это число больше, попробуй еще раз!");
            } else{
                alert("Это число меньше, попробуй еще раз!")
            }
        }
    }
}

function randomTask(){
    alert("Попробуй решить простую арифметическую задачу, удачи!");
    const operators = ['+', '-', '*', '/']
    const num1 = Math.floor(Math.random() * 101);
    let num2 = Math.floor(Math.random() * 101);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '/' && num2 === 0){
        num2 = 1;
    }
    let task = `${num1} ${operator} ${num2}`;
    const userAnswer = Number(prompt(task));
    if (operator === '-') {
      answer=num1-num2;
    } else if (operator === '+') {
      answer=num1+num2;
    } else if (operator === '*') {
      answer=num1*num2;
    } else {
      answer=num1/num2;
    }
    if (userAnswer === answer) {
      alert('Молодец, это правильный ответ! 😀');
    } else {
      alert('К сожалению, ты ошибся! 😔')
    }
}
