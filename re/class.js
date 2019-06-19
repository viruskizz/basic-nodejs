// OOP- Object Oreiented Programming
class Phone {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
  spec() {
    console.log(
      'color: ' + this.color + '\n' +
      'brand: ' + this.brand   
    );
  }
  call(dest) {
    console.log('calling to....' + dest)
  }
}
class Iphone extends Phone {
  constructor(color) {
    super(color);
    this.brand = 'Apple'  //override
  }
  touch() {
    console.log('Touched..!!');
  }
}

const iingPhone = new Iphone('white');
const nayPhone = new Phone('Black', 'Xiaomi');
iingPhone.spec();
iingPhone.call('08912345678')
iingPhone.touch()

nayPhone.spec();