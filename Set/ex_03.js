// const set2 = new Set(42);
// ошибка у чисел нету метода перебора 
// console.log(set);

const set = new Set();

set.add('button')
    .add('active')
    .add('active'); // уникальное значение 

console.log(set);

// Получить размер количество элементов в set
console.log(set.size);

// Проверить имеется ли значение в set 
console.log(set.has('button')); // true
console.log(set.has('primary')); // false