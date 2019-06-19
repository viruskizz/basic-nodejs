/**
 * ให้รับตัวเลขจากผู้ใช้ โดยจะรับค่าไปเรื่อยๆ จนกว่าจะผู้ใช้จะพิมพ์ 0
 * และแสดงผลรวมของตัวเลขที่ป้อนมาทั้งหมด
 */
const readline = require('readline-sync');
// let i = 0;
// let total = 0;
// while(i === 0){
//   let n = parseInt(readline.question("N: "));
//   total += n;
//   if(n === 0){
//     i=1;
//   }
// }
let total = 0;
while(true) {
  let n = parseInt(readline.question("N: "));
  if(n === 0){
    break;
  } else {
    total += n;
  }
}
console.log("Total " + total);