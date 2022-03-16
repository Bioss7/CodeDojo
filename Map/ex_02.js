const map = new Map();
// Ключ значение 
map.set(42, 'Ответ на главный вопрос жизни, вселенной и всего таког');
map.set('42', 'Ответ на главный вопрос жизни, вселенной и всего таког');

// Количество элементов
console.log(map.size);

// Получить значение с помощью метода get передав ключ
console.log(map.get(42));
console.log(map.get(43)); // undefined

// Проверить наличие значения 
console.log(map.has(42)); // true
console.log(map.has(43)); // false 

// Удалить значение 
map.delete('42');
console.log(map.size);

// Убрать все значения 
map.clear();
console.log(map);