class CartCtrl {
  constructor(cartSvc, userSvc) {
    this.cartSvc = cartSvc;
    this.userSvc = userSvc;

    this.userSvc.verifyUser();
  }

  getCartCount() {
    return this.cartSvc.updateCartCount();
  }

  getCartTotal() {
    return this.cartSvc.updateCartTotal();
  }
}

CartCtrl.$inject = ['cartService', 'userService'];
export default CartCtrl;
