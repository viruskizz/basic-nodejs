/**
 * if ข้อ 11 แบบ Short Syntax
 * รับตัวเลขเข้ามาเป็นราคาสินค้าของลูกค้า
 * ถ้าลูกค้าซื้อสินค้าเป็นจำนวนเงินตั้งแต่ 5000 บาท ถึง 10000 บาทจะได้รับส่วนลด 3% ของราคาสินค้า
 * ถ้าลูกค้าซื้อสินค้าเป็นจำนวนเงินตั้งแต่ 10001 บาท ถึง 20000 บาท จะได้รับส่วนลด 5% ของราคาสินค้า
 * ถ้าหากราคาสินค้าที่ลูกค้าซื้อมากกว่าหรือเท่ากับ 20001 บาท จะได้รับส่วนลด 10 % ของราคาสินค้า 
 */

const readline = require('readline-sync');

let price = parseInt(readline.question("Enter Price : "));
let discount = (price>=20000)? 0.10 : (price > 10000)? 0.05 : (price >= 5000)? 0.03 : 0;
console.log('Discount: ' + price*discount + ' => remain: ' + price*(1-discount));

/**
 * (condition) ? true-statement : false-statement;
 */