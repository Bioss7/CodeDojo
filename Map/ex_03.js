const map = new Map();


map.set('HTML', 'HyperText Markup Language')
    .set('CSS', 'Cascading Style Sheets')
    .set('JS', 'JavaScript');

// Метод entries можно использовать для клонирования Map
const map2 = new Map(map.entries());
console.log("map2:", map2);

// Метод keys возвращает перебираемый объект MapIterator с ключами
// MapIterator объект для перебора
console.log(map.keys());

// Получить элементы по порядку, мы можем используя оператор распространения 
console.log(...map.keys());
// Получить массив 
console.log([...map.keys()]);

// Метод values возвращает значения
console.log(...map.values());

// Метод entries возвращает массив, который состоит из других массивов, где первый элемент это ключ, 2 элемент значение 
// возвращает перебираемый объект
console.log(...map.entries());

