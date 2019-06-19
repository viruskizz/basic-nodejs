const uuidv1 = require('uuid/v1');
const fnc = require('./fnc');
let id = uuidv1();
console.log(id);
console.log( fnc.multiply(2, 2));

let x = [9, 10, 3, 5, 6].sort((a,b) => a-b);
console.log(x);