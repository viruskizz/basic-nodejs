// JS ES6
// import * as cal from './7-calculator';
// console.log(cal.add(1,2));
// import { add } from './7-calculator';
// console.log(add(1,2));

const cal = require('./7-calculator');
console.log(cal.add(1,2));

// setTimeout(() => {
//   console.log(55);
// }, 5000);
// [1,2].forEach(CallbackFunction());
const array = [1,2,3,4,5].forEach((element, index, array) => {
  console.log(element + '@' + index + ' => ' + array);
});
const sum = [1,2,3,4,5,6,7,8,9,10].reduce((a, b) => a + b);

console.log(sum);
console.log('por'[0]);
console.log('por'.toUpperCase());
console.log('por'.indexOf('r'));
const sort = [9,6,1,2,3,7].sort((a, b) => b - a)
console.log(sort);
// setTimeout(function(){}, variable);
