var a = 0;
let b = 'B';
// Array
let arrayString = ['A', 'B', 'C'];
let arrayNumber = [1, 2, 3, 4];
let arrayMix = ['A', 'B', 1, 2, 3, 4, 5];
console.log(arrayMix[3]);
console.log('length = ' + arrayMix.length);
arrayMix.push('10');
console.log('lastValue = ' + arrayMix[arrayMix.length-1]);
console.log(arrayMix);
arrayMix[2] = 'C';
console.log('after changed ', arrayMix);

let couple = [4, 7];
// จงเรียง Array มากไปหาน้อย
if(couple[1] > couple[0]) {
  let temp = couple[0];
  couple[0] = couple[1];
  couple[1] = temp;
}
console.log(couple);
let setNumber = [6, 3, 5, 1, 2];
// จงเรียง Array น้อยไปมาก
for(let i=0; i<setNumber.length; i++) {
  for(let j=i+1; j<setNumber.length; j++) {
    if(setNumber[j] > setNumber[i]) {
      let temp = setNumber[i];
      setNumber[i] = setNumber[j];
      setNumber[j] = temp;
      console.log('switched');
    }
    console.log(setNumber);
  }
}
console.log(setNumber);
