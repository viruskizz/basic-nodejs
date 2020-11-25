// Asynchronous and Synchronous
console.log("===== Synchronous =====");
console.log('Nurst');
console.log('Nay');
console.log('Por');

// console.log("===== Asynchronous =====");

// setTimeout(() => {
//   console.log('Nay');
// }, 3000);
// setTimeout(() => {
//   // This is callback function
//   console.log('Por');
// }, 1000);
// console.log('Nurst');
//
// console.log("===== Solve Asynchronous =====");
// setTimeout(() => {
//   console.log('Nay');
//   setTimeout(() => {
//     console.log('Por');
//     setTimeout(() => {
//       console.log('Nurst');
//     }, 1000);
//   }, 2000);
// }, 3000);


// console.log("===== Promise =====");

// create function promise
function myLog(name, time, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(value + Math.random() * 100);
    }, time);
  });
  return promise;
}
//
// myLog('Nay', 3000, 0)
//   .then((data) => myLog(`Por ${data}`, 2000, data))
//   .then((data) => myLog(`Nurst ${data}`, 1000, data))
//   .then((data) => myLog(`Nurst ${data}`, 1000, data))
//   .then((data) => myLog(`Nurst ${data}`, 1000, data))
//   .catch((error) => {
//     console.log(error);
//   });

async function wait() {
  const data1 = await myLog('Nay', 3000);
  const data2 = await myLog(`Por ${data1}`, 2000);
}

// wait();
//
// myLog('Nay', 3000).then(data => console.log('Nay' + data));
// myLog('Por', 1000).then(data => console.log('Por : ' + data));
