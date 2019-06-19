// Condition Lesson
/**
 * Syntax
 * if(condtion) {
 *  True: Statement
 * } else {
 *  False: Statement (optional)
 * }
 */
let input = 2;
if(5>2) {
  console.log('It greater');
}
if(input !== 1) {
  console.log('Yes it change');
}
/**
 * Boolean Type its convert to (0,1)
 * True => 1
 * False => 0
 */
let check = true;
if(check) {
  console.log('Pass Check');
}
let checkNum = 99999999;
if(checkNum) {
  console.log('Number 1');
} else {
  console.log('Number 0');
}

// more condition
input = 11;
if(input > 10){
  console.log('Max');
} else if(input > 5) {
  console.log('Middle');
} else {
  console.log('Min');
}

// Different Result
// if(input > 10){
//   console.log('Max');
// }
// if(input > 5) {
//   console.log('Middle');
// }
// if(input <= 5) {
//   console.log('Min');
// }