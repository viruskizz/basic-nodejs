let n = 5;
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++) {
    if(i === Math.ceil(n/2) || j === Math.ceil(n/2)) {
      process.stdout.write('0');
    }else{
      process.stdout.write('1');
    }
  }
  console.log();
}