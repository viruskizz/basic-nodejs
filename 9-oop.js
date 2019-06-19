/**
 * OOP : Object Oriented Programming
 */
module.exports = class Phone {
  // ทำครั้งแรกที่มีการเรียกใช้ class
  constructor(brand, model, cameraMode, color) {
    this.brand = brand;
    this.model = model;
    this.cameraMode = ['normal'];
    this.color = 'white';
  }
  call(number) {
    console.log('call to ' + number);
  }

  takePhoto(select) {
    let check = false;
    this.cameraMode.forEach((element) => {
      if(element === select) {
        check = true;
        return; //break;
      }
    });
    if(check){
      console.log('captured in mode: ' + select);
    } else {
      console.log('Error this mode not available');
    }
  }
}

// const porPhone = new Phone('iphone', 'xs');
// const iingPhone = new Phone('huiwei', 'p20');
// console.log('por\'s phone ' + porPhone.brand);
// console.log('iing\'s phone ' + iingPhone.brand);
// porPhone.call('099112345678');
// iingPhone.takePhoto('normal');

// class Huiwei extends Phone {
//   constructor(model, color) {
//     super();
//     this.brand = 'Huiwei';
//     this.cameraMode = ['normal', 'slow', 'panorama', 'square'];
//   }
// }
// /**
//  * จงสร้างโทรศัพท์ Huiwei
//  * ถ่ายรูปได้ 4 mode : normal, slow, square, panorama
//  */
// const newPhone = new Huiwei('p20', 'pink');
// newPhone.takePhoto('square');