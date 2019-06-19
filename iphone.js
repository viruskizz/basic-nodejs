const Phone = require('./9-oop');

class Iphone extends Phone {
  constructor(model, cameraMode, color) {
    super();
    this.brand = 'Iphone';
    this.cameraMode = cameraMode;
  }
}

const nayPhone = new Iphone('xs', ['normal', 'slow', 'panorama']);
console.log(nayPhone.brand);
console.log(nayPhone.color);
nayPhone.takePhoto('slow');