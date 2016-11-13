class CartService {
  constructor() {
    this.cameraList = [];
    this.cartTracker = [];
    this.subTotal = 0;

    this.tax = 0;
    this.total = 0;
  }

  updateCartCount() {
    return this.cartTracker.length;
  }

  updateCartTotal() {
    if (this.cartTracker.length > 0) {
      this.subTotal = this.cartTracker.reduce((init, next) => {
        return init + next;
      })
    }

    return this.subTotal;
  }

  getTax() {
    this.tax = this.subTotal * (10 / 100);
    return this.tax;
  }

  getTotal() {
    this.total = this.subTotal + this.tax;
    return this.total;
  }

  addCamera(camera) {
    const cam = {
      cameraId: camera.id,
      title: camera.name,
      image: camera.image,
      rating: camera.rating,
      price: parseInt(camera.price),
      onSale: camera.onSale,
      quantity: 1
    };

    let mappedCamList = this.cameraList.map((camera) => camera.cameraId);
    if (mappedCamList.indexOf(cam.cameraId) === -1) {
      this.cameraList.push(cam);
    } else {
      this.cameraList[mappedCamList.indexOf(cam.cameraId)].quantity++;
    }

    this.cartTracker.push(cam.price);
  }
}

export default CartService;
