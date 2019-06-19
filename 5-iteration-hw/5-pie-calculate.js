
const n = 1000000;
let sum = 0;
for(let i=1; i<=n; i++) {
  sum = sum + Math.pow(-1, i+1) * 1/(2*i-1);
}
const PI = 4 * sum;
console.log('PI = ' + PI);