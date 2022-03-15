// Объявление функции Function declaration
// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.
// Аргумент Argument
// Параметры Parametr
function random(number) {
    return Math.ceil(Math.random() * number);
}

let number = random(10);
alert(number);