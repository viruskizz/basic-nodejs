

const data = {
 name: 'Andrew',
 subjects: [
    { name: 'Thai', point: 40},
   { name: 'Math', point: 70},
   { name: 'Social', point: 65},
   { name: 'English', point: 89},
 ]
};

export const calGrade = (point) => {
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
};
