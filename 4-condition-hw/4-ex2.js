// let x = 10;
// let y = 20;
// let z = 30;
const readline = require('readline-sync');

let x = readline.question("Enter number x : ");
let y = readline.question("Enter number y : ");
let z = readline.question("Enter number z : ");

let total = x + y + z;
// if(total <= 100) {
//   console.log('100 OK!');
// }
if(total < 100 || total === 100) {
  console.log('100 OK!');
} else {
  console.log('100 NOT!');
}