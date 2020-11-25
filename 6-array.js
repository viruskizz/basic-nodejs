/**
 * Array a bucket of variable
 */
// let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];
let fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Grape'
];

console.log('index 0 is '+ fruits[0]);
fruits[0] = 'new Apple';
console.log('index 0 is '+ fruits[0]);
console.log('length is ' + fruits.length);
console.log('lastIndex is ' + fruits[fruits.length -1]);
console.log(fruits);

fruits.push('Por');
fruits.unshift('Boy');

console.log(fruits);
