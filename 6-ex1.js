const grades = [10, 50, 100, 90, 80];
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
for(let i=0; i<grades.length; i++) {
  sum += grades[i];
  if(grades[i] > max) { max = grades[i]; }
  if(grades[i] < min) { min = grades[i]; }
}
console.log('sum is ' + sum);
console.log('max is ' + max);
console.log('min is ' + min);