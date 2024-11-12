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
            alert("Нет, попробуй еще раз!")
            if (number >= 0 && number <= 25) {
                alert("Это число находится в диапазоне от 0 до 25")
            } else if (number >= 25 && number <= 50){
                alert("Это число находится в диапазоне от 25 до 50")
            } else if (number >= 50 && number <= 75){
                alert("Это число находится в диапазоне от 50 до 75")
            } else{
                alert("Это число находится в диапазоне от 75 до 100")
            }
        }
    }
}
