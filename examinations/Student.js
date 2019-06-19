const subjects = require('./subjects');
module.exports = class Student {

  constructor(firstname, lastname) {
    this.name = firstname + ' ' + lastname;
    this.subjects = this.createSubject();
    this.avgPoint = this.calAverage();
    this.avgGrade = this.calGrade(this.avgPoint);
  }

  myName() {
    // console.log('My name is ' + this.name + ' => ' + this.genPoint(100,40));
    // console.log(this.createSubject());
    console.log(this.avgPoint);
    console.log(this.avgGrade);
  }

  createSubject() {
    let result = [];
    subjects.forEach(element => {
      const point = this.genPoint(100,90);
      const subject = {
        name: element.name,
        point: point,
        grade: this.calGrade(point)
      };
      result.push(subject);
    });
    return result;
  }

  calAverage() {
    let sum = 0;
    this.subjects.forEach(element => {
      sum += element.point;
    });

    return Math.round(sum / subjects.length);
  }

  calGrade(point) {
    let grade = 'F';
    if(point >= 90) {
      grade = 'A';
    } else if(point >= 80) {
      grade = 'B';
    }  else if(point >= 70) {
      grade = 'C';
    } else if(point >= 60) {
      grade = 'D';
    }
    return grade;
  }

  genPoint(max, min) {
    let point = Math.round(Math.random() * (max - min) + min);
    return point;
  }
};

