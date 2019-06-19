// A คือ 10 B คือ 20 C คือ 30
const readline = require('readline-sync');
let input1 = readline.question("Enter Price : ");
let input2 = readline.question("Enter Price : ");
let input3 = readline.question("Enter Price : ");
let number;
// if(input1 === 'A') {
//   input1 = 10;
// } else if(input1 === 'B') {
//   input1 = 20;
// } else if(input1 === 'C') {
//   input1 = 30;
// } else {
//   input1 = 0;
// }
switch(input1) {
  case 'A': input1 = 10; break;
  case 'B': input1 = 20; break;
  case 'C': input1 = 30; break;
  default: input1 = 0; break;
}
switch(input2) {
  case 'A': input2 = 10; break;
  case 'B': input2 = 20; break;
  case 'C': input2 = 30; break;
  default: input2 = 0; break;
}
switch(input3) {
  case 'A': input3 = 10; break;
  case 'B': input3 = 20; break;
  case 'C': input3 = 30; break;
  default: input3 = 0; break;
}
let total = input1+input2+input3;
console.log('Total = ' + total);