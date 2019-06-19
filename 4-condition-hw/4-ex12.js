const readline = require('readline-sync');
let point = readline.question("Enter Point : ");
point = parseInt(point);
let grade;
if(point >= 80) {
  grade = 'A';
} else if (point >= 70) {
  grade = 'B';
} else if (point >= 60) {
  grade = 'C';
} else if (point >= 50) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log('Grade is ' + grade);