// let a = 50;
// let b = 20;
// if(a+b > 50) {
//   console.log('More 50');
// }

const readline = require('readline-sync');

let a = readline.question("Enter number a : ");
let b = readline.question("Enter number b : ");
a = parseInt(a);
b = parseInt(b);
let sum = a + b;
if(sum > 50) {
// if(parseInt(a) + parseInt(b) > 50) {
  console.log('More 50');
} else {
  console.log('Less 50');
}