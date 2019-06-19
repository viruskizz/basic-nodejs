/**
 * ให้รับค่าจากผู้ใช้ไปเรื่อยๆ เมื่อพิมพ์ 0 ให้หยุดรับค่าและแสดงผล
 * ค่าน้อยสุด, ค่ามากที่สุด, ผลรวม, ค่าเฉลี่ย, จำนวนตัวเลขที่ป้อน
 */
const readline = require('readline-sync');

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let count = 0;
let sum = 0;
while(true) {
  let n = parseInt(readline.question("N: "));
  if(n === 0){ break; }
  sum += n;
  count++;
  if(n > max) {
    max = n;
  }
  if(n < min) {
    min = n;
  }
}
let avg = sum/count;
console.log('min = ' + min);
console.log('max = ' + max);
console.log('count = ' + count);
console.log('sum = ' + sum);
console.log('avg = ' + avg);