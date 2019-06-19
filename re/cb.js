const axios = require('axios')

test(() => console.log('Test ---> Araiva') )

// setTimeout(() => {
//   console.log('iing')
//   setTimeout(() => {
//     console.log('nurst');
//     setTimeout(() => {
//       console.log('por');
//       setTimeout(() => {
//         console.log('nay');
//       }, 1000);
//     }, 1000);
//   }, 2000);
// }, 3000);

callName('Araiva', function(data) {
  console.log(data)
})
let result;
myLog('iing', 2000)
  .then((number) => {
    result = 'nurst' + number;
    myLog(result, 2000)
  })
  .then(() => myLog('nay', 2000))
  .then(() => myLog('por', 1000))
  .catch((error) => console.log(error))


const sort = [5, 6, 7, 8].sort((a, b) => b-a);
console.log(sort);
[1, 2, 3, 4].forEach( (element, index, array) => {
  console.log('index => ' + element);
} )


/**
 * Asynchronouse
--- 1 ---- 2 ---- 3 - 1 -- 4 ----> single thread
    |                 ^
    |___ process _____|

 * Synchornouse
---- 1 process -------------------> 2 ---->3 ---->4
 */
// console.log('nay');






// callName('Araiva', (data) => {
//   console.log(data);
// })
function test(name) {
  name();
}

function callName(name, callback) {
  console.log(name)
  const returnName = 'return:' + name;
  setTimeout(() => {
    callback(returnName)
  }, 2000)
}

// create function promise
function myLog(name,time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name)
      resolve(Math.random()*100);
    }, time);
  });
  return promise;
}