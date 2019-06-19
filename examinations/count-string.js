

const text = "This is Session";
let arrText = text.toLocaleLowerCase().split('');

let result = [
  { character: arrText[0], value: 0 }
];
arrText.forEach(char => {
  for(let i=0; i<result.length; i++) {
    if(result[i].character === char) {
      result[i].value += 1;
      break;
    }
    if(i === result.length-1) {
      result.push({ character: char, value: 0 });
    }
  }
});
console.log('Text : ' + text);
console.log(result);
