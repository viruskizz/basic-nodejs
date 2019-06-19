const number = Math.ceil(Math.random()*3);
let name;
switch(number) {
  case 1:
    name = 'POR';
    break;
  case 2:
    name = 'IING';
    break;
  case 3:
    name = 'NUCH';
    break;
  default:
    name = 'NONE';
    break;
}
console.log(`Lucky N${number}: ${name}`);