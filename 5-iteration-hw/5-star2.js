/**
 * ให้พิมพ์ ผลลัพธ์ตามภาพ
 * กำหนด n = 5;
 * x
 * xx
 * xxx
 * xxxx
 * xxxxx
 */
let n = 5;
for(let i=1; i<=n; i++) {
  for(let j=1; j<=i; j++) {
    process.stdout.write('x');
  }
  process.stdout.write('\t i='+i);
  console.log();
}