// let n = 5;
// for(let i=1; i<=n; i++){
//   for(let j=i; j<=n; j++) {
//     process.stdout.write(''+j);
//   }
//   for(let k=i-1; k>0; k--) {
//     process.stdout.write(''+k);
//   }
//   console.log();
// }

let n = 5;
for(let i=1; i<=n; i++){
  for(let j=i; j<=n; j++) {
    process.stdout.write(''+j);
  }
  for(let k=i-1; k>=1; k--) {
    process.stdout.write(''+k);
  }
  console.log();
}