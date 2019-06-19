/**
 * 12345
 * 23456
 * 34567
 * 45678
 * 56789
 */
const n = 5;
for(let i = 1; i<=n; i++) {
  for(let j = i; j<n+i; j++) {
    process.stdout.write(''+j);
  }
  process.stdout.write('\t => i='+ i);
  console.log();
}