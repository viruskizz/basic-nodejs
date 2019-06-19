point = 100;
// console.log('grade is ' + callGrade(point));
// console.log('grade is ' + callGrade(80));
// console.log('grade is ' + callGrade(50));

callName('iing', 'kmtl');
const result = plus(1, 2);
console.log(result);

function callName(firstname, lastname) {
  // console.log(`My name ${firstname} ${lastname}`);
  console.log('My name ' + firstname + ' ' + lastname);
}

function plus(a, b) {
  return a+b;
}

function callGrade(point) {
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
  return grade;
}