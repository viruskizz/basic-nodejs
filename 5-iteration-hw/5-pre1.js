/**
 * รับค่าจากผู้ใช้เป็นตัวเลข แล้วพิมพ์ 1 ถึง ตัวเลขที่รับเข้ามา
 * เช่น ป้อน 10 ผลลัพท์ 1 2 3 ... 10
 * เช่น ป้อน 20 ผลลัพท์ 1 2 3 ... 20
 * และให้แสดงเฉพาะเลขคู่
 */
const readline = require('readline-sync');
let n = parseInt(readline.question("N: "));
let i = 1;
while(i<=n){
  if(i%2 === 0){
    console.log(i);
  }
  i++;
}