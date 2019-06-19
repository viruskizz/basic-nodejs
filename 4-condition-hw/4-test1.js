/**
 * จงเขียนโปรแกรมคำนวณค่าจอดรถ โดย
 * รับข้อมูลเป็น ชั่วโมง กับ นาที แล้วแสดงผลเป็นราคาค่าจอดรถ
 * ชั่วโมงแรก ฟรี ชั่วโมงถัดไป คิดชั่วโมงละ 40 บาท เศษของชั่วโมงคิดเป็นหนึ่งชั่วโมง
 * ตัวอย่าง
 * จอด 2 ชั่วโมง 15 นาที =  80 บาท
 */
const readline = require('readline-sync');
let hour = parseInt(readline.question("Enter Hour: "));
let min = parseInt(readline.question("Enter Min: "));
let total = 0;
// Method 1 : Hour
if(hour > 0) {
  total = (hour-1)*40;
}
total = total + (Math.ceil(min/60)) * 40;
console.log('Total = ' + total);

// Method 2 : Minute
let price = 0;
min = min + hour*60;
price = Math.ceil((min-60)/60) * 40;
console.log('Price = ' + price);