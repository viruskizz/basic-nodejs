
const n = 5;
let k = 1;
for(let i = 1; i<=n; i++) {
  for(let j = 1; j<=n; j++) {
    process.stdout.write(' ' + k);
    k++;
  }
  console.log();
}