class CartCtrl {
  constructor(cartSvc, userSvc) {
    this.cartSvc = cartSvc;
    this.userSvc = userSvc;

    // kicks user to login if not authenticated
    this.userSvc.verifyUser();
  }

  getCartCount() {
    return this.cartSvc.updateCartCount();
  }

  // gets cart subtotal 
  getCartTotal() {
    return this.cartSvc.updateCartTotal();
  }
}

CartCtrl.$inject = ['cartService', 'userService'];
export default CartCtrl;
