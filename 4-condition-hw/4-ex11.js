/**
 * if ข้อ 11
 * รับตัวเลขเข้ามาเป็นราคาสินค้าของลูกค้า
 * ถ้าลูกค้าซื้อสินค้าเป็นจำนวนเงินตั้งแต่ 5000 บาท ถึง 10000 บาทจะได้รับส่วนลด 3% ของราคาสินค้า
 * ถ้าลูกค้าซื้อสินค้าเป็นจำนวนเงินตั้งแต่ 10001 บาท ถึง 20000 บาท จะได้รับส่วนลด 5% ของราคาสินค้า
 * ถ้าหากราคาสินค้าที่ลูกค้าซื้อมากกว่าหรือเท่ากับ 20001 บาท จะได้รับส่วนลด 10 % ของราคาสินค้า 
 */

const readline = require('readline-sync');

let price = parseInt(readline.question("Enter Price : "));
let discount = 0
if(price > 20000) {
  discount = 10;
} else if(price > 10000) {
  discount = 5;
} else if(price >= 5000){
  discount = 3;
}
let dcPrice = (price * discount/100);
console.log('Discount: ' + dcPrice + ' => remain: ' + (price-dcPrice));

// if(price < 5000) {
//   let discount = 0;
// }
// if(price >= 5000 && price <= 10000) {
//   let discount = 3;
// }
// if(price >= 10001 && price <= 20000) {
//   let discount = 5;
// }
// if(price >= 20001) {
//   let discount = 10;
// }