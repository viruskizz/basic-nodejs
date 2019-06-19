/*
  ให้รับสร้าง Object students โดยมีเงื่อนไขดังต่อไปนี้
  1.ใช้ชื่อจาก array students ข้างต้น
  2.สุ่มคะแนนให้แต่ละคน 40-100 คะแนน
  3.คำนวนเกรดให้แต่ละคน โดยให้สร้างฟังก์ชั่นคำนวนเกรด
  4.แสดงผลของแต่ละคน โดยเรียงลำดับตาม เกรด, คะแนน, ชื่อ
  5.แสดงผลรวมคะแนนของทุกคน
*/
const Students = require('./students');
const room = new Students();
console.log(room.students);
console.log('=========== sorted Mutation ===========');
console.log(room.sortStudent());

console.log(room.students);

console.log('=========== sorted Immutation ===========');
room.sort();
console.log(room.students);