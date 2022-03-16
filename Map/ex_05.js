const map = new Map();

map.set('HTML', 'HyperText Markup Language')
    .set('CSS', 'Cascading Style Sheets')
    .set('JS', 'JavaScript');

// for(let kv of map){
//     console.log(kv);
// }    

// for(let [key, value] of map){
//     console.log(key, value);
// }    

map.forEach((value, key, map) => console.log(value, key, map));

