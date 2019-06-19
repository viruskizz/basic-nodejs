const uuid4 = require('uuid/v1'); // ถ้าเรียกเป็น Directory จะค้นหาไฟล์แรกที่ชื่อ index
const random = require('math-random'); // ถ้าเรียกเป็น Directory จะค้นหาไฟล์แรกที่ชื่อ index
// const student = require('./4-condition'); current location
// const student = require('../4-condition'); go up 1 level location
// const student = require('../../4-condition'); go up 2 level location
console.log(uuid4());

const name = require('./data/name.json');
// JSON.stringify(name);
// JSON.parse([{name: 'araiva', age: 20}]);
console.log(name[0].firstname);
console.log('random: ' + random());
//
// const pm = fetch('http://air4thai.pcd.go.th/services/getNewAQI_JSON.php');
// console.log(pm);
