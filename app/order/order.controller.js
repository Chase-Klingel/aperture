class OrderCtrl {
  constructor(ordersSvc, userSvc, cartSvc, $state) {
    this.ordersSvc = ordersSvc;
    this.userSvc = userSvc;
    this.cartSvc = cartSvc;
    this.$state = $state;

    // needs review adds a warning message to check order details
    this.needsReview = false;

    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zip = '';

    this.ordersSvc.getCheckoutDetails().then((checkoutDetails) => {
      // user is new and no details are stored in data base
      if (checkoutDetails.data.length === 0) {
        this.checkoutDetails = {
          items: this.cartSvc.cameraList,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          state: this.state,
          zip: this.zip
        }
      // user info is already stored and needs review
      } else {
        this.checkoutDetails = {
          items: this.cartSvc.cameraList,
          address1: checkoutDetails.data[0].address1,
          address2: checkoutDetails.data[0].address2,
          city: checkoutDetails.data[0].city,
          state: checkoutDetails.data[0].state,
          zip: checkoutDetails.data[0].zip
        }
        this.needsReview = true;
      }

    }).catch((err) => err);

    // kicks user to login if not authenticated
    this.userSvc.verifyUser();
  }

  // shows large image of first order added to cart on orders page
  showJumbotron() {
    if (this.cartSvc.cameraList.length > 0) {
      return this.cartSvc.cameraList[0].image;
    }
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
