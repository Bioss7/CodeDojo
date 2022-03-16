const set = new Set();
set.add('button').add('active');

// В set нету метода для получения доступа к конкретному элементу
// нету понятия индекса

// Получить элементы set
console.log(...set);

// console.log(set.values());
// оператор развертывания
console.log(...set.values());

// нету понятия ключ
console.log(...set.keys());

// Метод entries возвращает массив пара ключ значение, 
// но т.к. нету понятия ключа получаем значение значение 
console.log(...set.entries());

// Получение массива
console.log([...set]);
console.log(Array.from(set));

// Перебор set
console.log("for of:");
for (let item of set) {
    console.log(item);
}

console.log("forEach:");
// Функциональный способ перебора
set.forEach((item, item2, set ) => console.log(item, item2, set));

