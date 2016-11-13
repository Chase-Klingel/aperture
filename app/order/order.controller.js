class OrderCtrl {
  constructor(ordersSvc, userSvc, cartSvc, $state) {
    this.ordersSvc = ordersSvc;
    this.userSvc = userSvc;
    this.cartSvc = cartSvc;
    this.$state = $state;
    this.needsReview = false;
    
    if (this.cartSvc.cameraList > 0) {
      this.jumboImg = this.cartSvc.cameraList[0].image;
    }

    this.ordersSvc.getCheckoutDetails().then((checkoutDetails) => {
      if (checkoutDetails.data[0].address1 === undefined) {
        this.checkoutDetails = {
          items: this.cartSvc.cameraList,
        }
      } else {
        this.checkoutDetails = {
          items: this.cartSvc.cameraList,
          address1: checkoutDetails.data[0].address1,
          address2: checkoutDetails.data[0].address2,
          city: checkoutDetails.data[0].city,
          state: checkoutDetails.data[0].state,
          zip: checkoutDetails.data[0].zip
        }
      }

      if (this.checkoutDetails !== undefined) {
        this.needsReview = true;
      }
    }).catch((err) => err);

    this.userSvc.verifyUser();
  }

  postOrder() {
    this.ordersSvc.postOrder(this.checkoutDetails).then(() => {
      Materialize.toast('Your order was placed, thank you!', 3000);
      this.cartSvc.cartTracker = [];
      this.cartSvc.cameraList = [];
      this.cartSvc.subTotal = 0;
      this.$state.go('home');
    }).catch((err) => {
      Materialize.toast('Sorry, there was an error processing your order. Please try again.', 3000);
    })

  }

  cameraList() {
    return this.cartSvc.cameraList;
  }

  getSubtotal() {
    console.log(this.cartSvc.subTotal);
    return this.cartSvc.subTotal;
  }

  getTax() {
    return this.cartSvc.getTax();
  }

  getTotal() {
    return this.cartSvc.getTotal();
  }
}

OrderCtrl.$inject = ['ordersService', 'userService', 'cartService', '$state'];
export default OrderCtrl;
