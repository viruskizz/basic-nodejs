const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrays[0][1]);
const n = 3;
const m = 3;
const maxRan = 10;
const array1 = [];
for(let i=0; i<n; i++) {
  let value = Math.round(Math.random()*maxRan);
  array1.push(value);
}
let array2 = [];
for(let i=0; i<n; i++) {
  let nestArray = [];
  for(let j=0; j<m; j++) {
    let value = Math.round(Math.random()*maxRan);
    nestArray.push(value);
  }
  array2.push(nestArray);
}
console.log(array1);
console.log(array2);