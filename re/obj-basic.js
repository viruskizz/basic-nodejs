// object basic
let a = 0;
let array = ['iing', 'eng', 4, 'prathumtani']; // array[0]
array.push('new value');
console.log(array);
let person = {
  firstname: 'iing',
  learn: [
    { subject: 'Eng', grade: 4 },
    { subject: 'Thai', grade: 3 },
    { subject: 'Math', grade: 4 },
  ],
  address: {
    number: '23/2',
    district: 'klongluang',
    province: 'pathumtani',
    country: 'Thailand'
  }
}
console.log('person name is ' + person.firstname);
console.log(person.learn[0].subject + ' grade is  ' + person.learn[0].grade);
console.log('person country is ' + person.address.country);
person.learn.push({ subject: 'Social', grade: 0 });
let sum = 0;
for(let i=0; i<person.learn.length; i++) {
  sum += person.learn[i].grade;
}
person.conclusion = sum/person.learn.length;
console.log(person);
