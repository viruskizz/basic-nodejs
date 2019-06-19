/**
 * ให้พิมพ์ ผลลัพธ์ตามภาพ
 * กำหนด n = 5;
 * xxxxx
 * xxxx
 * xxx
 * xx
 * x
 */
let n = 5;
for(let i=5; i>=1; i--) {
  for(let j=1; j<=i; j++) {
    process.stdout.write('x');
  }
  process.stdout.write('\t i='+i);
  console.log();
}