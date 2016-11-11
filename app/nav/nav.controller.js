class NavCtrl {
  constructor(userSvc, $state) {
    this.$state = $state;
    this.userSvc = userSvc;
  }

  displayCatItems() {
    if (this.$state.current.name === ('main') || this.$state.current.name === ('home')) {
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
      console.log('logged out!');
      this.$state.go('login');
    }).catch((err) => {
      Materialize.toast('Sorry, an error occured. Please try again.');
    })
  }
}

NavCtrl.$inject = ['userService', '$state'];
export default NavCtrl;
