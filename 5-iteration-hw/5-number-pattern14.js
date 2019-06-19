const n = 5;
for(let i = n; i>0; i--) {
  for(let j = n; j>0; j--) {
    if(j>i){
      process.stdout.write(' ' + j);
    }else {
      process.stdout.write(' ' + i);
    }
  }
  console.log();
}