const set = new Set();

// Отправляем ссылку на один объект, а в has получаем другой объект
// set.add({ className: 'button'});

// проблему можно решить, способом поместить объект в константу 
const buttonRef = { className: 'button'};
set.add(buttonRef);

console.log(set.has(buttonRef)); // true