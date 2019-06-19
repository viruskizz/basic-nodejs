

// function
function plus(a, b) {
  return a+b;
}
const minus = function (a, b) {
  return a-b;
}
const multiply = (a, b) => {
  return a*b
}
const divide = (a, b) => a/b;

// input(void, value) ==> [process] ==> output(void, value)
// echoName('araiva', 'nay');
// let gradeIIng = calGrade(80);
// console.log(gradeIIng);
// console.log( plus(1, 2) );
// console.log( minus(1, 2) );


function echoName(firstname, lastname) {
  console.log('My name is ' + firstname + ' ' + lastname);
}
function calGrade(point) {
  let grade;
  if(point>=80) {
    grade = 'A'
  } else if(point >= 70) {
    grade = 'B'
  } else if(point >= 60) {
    grade = 'C'
  } else if(point >= 50) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  return grade;
}

module.exports = {
  plus,
  minus,
  multiply,
  divide
}