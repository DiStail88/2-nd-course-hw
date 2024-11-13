function randomNumber() {
    alert("Попробуй угадать случайное число, удачи!");
    const number = Math.floor(Math.random() * 101);
    let userAnswer;
    while (userAnswer !== number) {
        userAnswer = Number(prompt("Твой вариант?"));
        if (number === userAnswer) {
            alert("Урааа, ты справился! Ждем тебя еще!");
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
