const studentsTemplate = require('./studentTemplate');

module.exports = class Students {
  constructor(number = 20) {
    this.number = number;
    this.students = this._setStudents();
  }

  sortStudent() {
    const copiedStudents = this.students.slice();
    copiedStudents.sort((a, b) => {
      // Sort grade lowest to greates (A is lowest)
      if(a.grade > b.grade) return 1;
      if(a.grade < b.grade) return -1;
      // Sort point greatest to lowest
      if(b.point > a.point) return 1;
      if(b.point < a.point) return -1;
      // Sort name lowest to greates
      if(a.point > b.point) return 1;
      if(a.point < b.point) return -1;
    });
    return copiedStudents;
  }

  sort() {
    this.students.sort((a, b) => {
      // Sort grade lowest to greates (A is lowest)
      if(a.grade > b.grade) return 1;
      if(a.grade < b.grade) return -1;
      // Sort point greatest to lowest
      if(b.point > a.point) return 1;
      if(b.point < a.point) return -1;
      // Sort name lowest to greates
      if(a.point > b.point) return 1;
      if(a.point < b.point) return -1;
    });
  }

  _setStudents() {
    let classRoom = [];
    studentsTemplate.fullname.forEach((element) => {
      let point = this._randomPoint();
      let student = {
        name: element,
        point: point,
        grade: this._gradeCalculate(point),
      };
      classRoom.push(student);
    });
    return classRoom;
  }

  _randomPoint() {
    return Math.round(Math.random()*60 + 40);
  }

  _gradeCalculate(point) {
    let grade = 'F';
    if(typeof point !== 'number') {
      throw new Error('point must be typeof Number only');
    }
    if (point >= 80) {
      grade = 'A';
    } else if(point >= 70) {
      grade = 'B';
    } else if(point >= 60) {
      grade = 'C';
    } else if(point >= 50) {
      grade = 'D';
    }
    return grade;
  }
}