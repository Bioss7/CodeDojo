const map = new Map();


map.set('HTML', 'HyperText Markup Language')
    .set('CSS', 'Cascading Style Sheets')
    .set('JS', 'JavaScript');

// Получить пару ключ значение с помощью реструктуризации
// const [ first, second, third ] = map;
const [ [ key, value ], second, third ] = map;

// console.log(first, second, third);
console.log(key, value);
