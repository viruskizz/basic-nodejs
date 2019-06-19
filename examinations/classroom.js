
const myClass = require('./students');
const Student = require('./Student');

const students = [];
myClass.forEach(element => {
  students.push(new Student(element.firstname, element.lastname));
});

printClassroom(students);

console.log('Sort');
students.sort((a, b) => {
  if(b.avgPoint > a.avgPoint) { return 1; }
  if(b.avgPoint < a.avgPoint) { return -1; }
  if(a.avgPoint === b.avgPoint) {
    if(a.name > b.name) {
      return 1;
    }
    if(a.name < b.name) {
      return -1;
    }
    return 0;
  }
});

printClassroom(students);

function printClassroom(classroom) {
  classroom.forEach(element => {
    console.log({
      name: element.name,
      avgPoint: element.avgPoint,
      avgGrade: element.avgGrade
    })
  })
}
