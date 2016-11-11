class CartCtrl {
  constructor() {
    this.cameraList = [];
    this.totalQuantity = 0;
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
  }

  addCamera(camera) {
    this.totalQuantity++;
    this.subtotal += parseInt(camera.price);
    this.tax += (this.subtotal * (10 / 100));
    this.total += this.subtotal + this.tax;

    const cam = {
      id: camera.id,
      quantity: 1,
      name: camera.name,
      image: camera.image,
      price: parseInt(camera.price)
    };

    let mappedCamList = this.cameraList.map((camera) => camera.id);

    if (mappedCamList.indexOf(cam.id) === -1) {
      this.cameraList.push(cam);
    } else {
      this.cameraList[mappedCamList.indexOf(cam.id)].quantity++;
    }
  }
}

export default CartCtrl;
