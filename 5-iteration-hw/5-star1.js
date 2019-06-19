/**
 * ให้พิมพ์ ผลลัพธ์ตามภาพ
 * กำหนด n = 5;
 * xxxxx
 * xxxxx
 * xxxxx
 * xxxxx
 * xxxxx
 */
let n = 5;
for(let i = 1; i<=5; i++) {
  for(let j=1; j<=5; j++) {
    process.stdout.write('x');
  }
  console.log();
}