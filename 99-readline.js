// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let lineno = 0;
// let sum = 0;
// rl.on('line', function (line) {
//   console.log('line : ' + line);
//   // lineno++;
//   sum = sum + parseInt(line);
//   console.log('Line Sum ' + sum);
//   if(line === 'exit') {
//     rl.close();
//   }
// });

const readline = require('readline-sync');

let numberOne = readline.question("Enter number 1 : ");
let numberTwo = readline.question("Enter number 2 : ");

console.log('Berfore Parse ' + numberOne + numberTwo);

let sum = parseInt(numberOne) + parseInt(numberTwo);
console.log('SUM is ' + sum);
