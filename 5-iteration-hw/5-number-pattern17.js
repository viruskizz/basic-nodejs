const n = 5;
for(let i = 1; i<=n; i++) {
  for(let j = i; j>0; j--) {
    process.stdout.write(''+j);
  }
  for(let k = 2; k<=n-i+1; k++) {
    process.stdout.write(''+k);
  }
  console.log();
}