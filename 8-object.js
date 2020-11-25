const student = {
  firstname: "Araiva",
  subjects: [
    { name: "Thai", point: 50 },
    { name: "Eng", point: 90 },
    { name: "Math", point: 21 },
    { name: "Physic", point: 9 },
    'Apple',
    () => 'Hello index 1',
  ]
};
const key = 'subjects';
console.log(student.firstname);
console.log(student.subjects[1].name);
console.log(student['subjects'][1].name);
console.log(student[key][1].name);
console.log(student.subjects[1].point);
student.subjects[0].grade = 'Pass';

console.log(student);
console.log(student.subjects[1].grade);
console.log(student.subjects[4]);
console.log(student.subjects[5]());
