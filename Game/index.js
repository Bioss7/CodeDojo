
let name = prompt("Привет! Как тебя зовут?");

while (name == '' || name == null) {
    name = prompt("Привет! Как тебя зовут?");
} 

alert(name + ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал"');

let number = 42;
let guess = prompt('Какое число я загадал?');
let numberOfGuessses = 0;

while(guess != number){
    if(guess > number){
        guess = prompt('Много. Попробуй еще раз');
        numberOfGuessses++;
    }

    if(guess < number){
        guess = prompt('Мало. Попробуй еще раз');
        numberOfGuessses++;
    }
}

alert('Ты угадал! Это число ' + number + '. Тебе понадобилось ' + numberOfGuessses + ' попыток.');



