let n = 5;
for(let i=1; i<=n; i++) {
  for(let j=1; j<=n; j++) {
    if(j%2 === 1) {
      process.stdout.write(''+0);
    } else {
      process.stdout.write(''+1);
    }
  }
  console.log();
}