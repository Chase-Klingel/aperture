class CheckoutCtrl {
  constructor(ordersSvc, userSvc) {
    this.ordersSvc = ordersSvc;
    this.userSvc = userSvc;
    this.needsReview = false;
    this.ordersSvc.getCheckoutDetails().then((checkoutDetails) => {
      this.checkoutDetails = checkoutDetails.data[0];
      if (this.checkoutDetails !== undefined) {
        this.needsReview = true;
      }
    }).catch((err) => err);

    this.userSvc.verifyUser();
  }

  dummyTest() {
    this.ordersSvc.postOrder(this.checkoutDetails);
    console.log(this.checkoutDetails);
  }
}

CheckoutCtrl.$inject = ['ordersService', 'userService'];
export default CheckoutCtrl;
