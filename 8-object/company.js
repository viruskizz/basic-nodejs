/**
 * ให้สร้าง Array ที่มีผลประกอบบริษัทเป็นรายเดือน
 * มี รายได้ กับ ทุน โดย ให้แรนดอมเลข 1 - 100,000 
 * [
 *  { month: 1 ,cost : 1000, income: 50000},
 *  { month: 2 , cost : 1000, income: 50000},
 *  { month: 3, cost : 1000, income: 50000},
 *  ... { month: 12, cost : 1000, income: 50000},
 * ]
 */
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let company = [];
month.forEach((element, index, array) => {
  let income = randomMoney(100000);
  let cost = randomMoney(50000);
  let result = {
    month: element,
    cost: cost,
    income: income,
    profit: income - cost 
  };
  company.push(result);
});

console.log(company);

function randomMoney(max) {
  return Math.round(Math.random()*max);
}