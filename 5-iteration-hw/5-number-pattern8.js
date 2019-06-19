// let n = 5;
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n; j++) {
//     if(i===j || j===(n-i+1)){
//       process.stdout.write('1');
//     }else{
//       process.stdout.write('0');
//     }
//   }
//   console.log();
// }

let n = 5;
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++) {
    if(i === j || j===(n-i+1)){
      process.stdout.write('1');
    }else{
      process.stdout.write('0');
    }
  }
  console.log();
}