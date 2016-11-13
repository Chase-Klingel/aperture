class NavCtrl {
  constructor(userSvc, $state, cartSvc) {
    this.$state = $state;
    this.userSvc = userSvc;
    this.cartSvc = cartSvc;
  }

  displayCatItems() {
    if (this.$state.current.name === ('main') || this.$state.current.name === ('home') || this.$state.current.name === ('pastOrders')) {
      return true;
    } else {
      return false;
    }
  }

  displayRegItems() {
    return this.$state.current.name === 'register' ? true : false;
  }

  displayOrderItems() {
    return this.$state.current.name === 'orders' ? true : false;
  }

  displayLoginItems() {
    return this.$state.current.name === 'login' ? true : false;
  }

  logout() {
    this.userSvc.logout().then((res) => {
      this.$state.go('login');
    }).catch((err) => {
      Materialize.toast('Sorry, an error occured. Please try again.', 3000);
    })
  }
}

NavCtrl.$inject = ['userService', '$state', 'cartService'];
export default NavCtrl;
