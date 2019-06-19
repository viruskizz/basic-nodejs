
let arrName = ['Nay', 'Nerd', 'Gun'];
let arrCom = ['HP', 'Mac', 'Dell'];
let arrSize = ['X', 'M', 'L'];
let obj = {
  name: 'Araiva',
  call: (name) => console.log('Name: ' + name)
};

const printName = (arr) => arr.forEach(element =>console.log(element));

class MyMath {

  plus (a, b) {
    return a+b;
  }
  minus (a,b) {
    return a-b;
  };

  multiply (a,b) {
    return a*b;
  };
  divide (a,b) {
    return a/b;
  };
}

class Area {
  constructor(r) {
    this.r = r;
  }
  static alert() {
    console.log('ALERT !!!!')
  }
  circle() {
    return this.r * this.r*3.1416;
  }
  cydir(h) {
    return this.r * this.r * 3.1416 *h;
  }
}

class Circle extends Area {
  sphere() {
    return this.r* this.r* this.r*3.1416*4/3;
  }
}

const wheel = new Area(10);

let wheelArea = wheel.circle();
let wheelCydir = wheel.cydir(2);

console.log(Area.alert())
console.log(wheelArea)
console.log(wheelCydir)

let circle = new Circle(7);
console.log('circle: ' + circle.circle());
console.log('sphere: ' + circle.sphere());
