// const การประกาศตัวแปร เป็นค่าคงที่
const debt = 12;
// debt = add(10, 2); Cannot change constaint value

function add(x, y) {
  return x+y;
}
const minus = function(x, y) {
  return x - y;
}
const muliply = (x, y) => {
  return x*y;
}
const divide = (x, y) => x/y;

// console.log(add(1,2));
// console.log(minus(4,1));
// console.log(muliply(5,2));
// console.log(divide(10,2));

// Export NodeJs Module
module.exports.power = (a, b) => {
  result = 1;
  for(let i=0; i<b; i++) {
    result *= a;
  }
  return result;
}
// module.exports.add = add;

module.exports = {
  add, minus, muliply, divide
}

// NodeJs v10+ can export  as JS ES6
// export default {add, minus, muliply, divide}
// export { minus as minusNew };