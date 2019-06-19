const n = 5;
for(let i = 1; i<=n; i++) {
  for(let j = 0; j<n; j++) {
    // process.stdout.write(`${i}/${j} \t`);
    if(j+i < n){
      process.stdout.write(''+(j+i));
    } else {
      process.stdout.write(''+ n);
    }
  }
  console.log();
}