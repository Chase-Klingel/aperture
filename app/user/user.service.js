class UserService {
  constructor($http, $state, cartSvc) {
    this.$state = $state;
    this.$http = $http;
    this.cartSvc = cartSvc;
    this.loggedIn = false;
    this.$http({
      url: '/api/token',
      method: 'GET'
    }).then((res) => {
      this.loggedIn = res.data;
      return res;
    })
  }

  signUp(user) {
    return this.$http({
      url: '/api/users',
      method: 'POST',
      data: user
    }).then((res) => {
      this.loggedIn = true;
      return res;
    }).catch((err) => err);
  }

  logIn(user) {
    return this.$http({
      url: '/api/token',
      method: 'POST',
      data: user
    }).then((res) => {
      this.loggedIn = true;
      return res;
    })
  }

  logout() {
    return this.$http({
      url: '/api/token',
      method: 'DELETE'
    }).then((res) => {
      this.cartSvc.subTotal = 0;
      this.cartSvc.cartTracker = [];
      this.cartSvc.cameraList = [];
      this.loggedIn = false;
      return res;
    })
  }

  verifyUser() {
    if (this.loggedIn === false) {
      this.$state.go('register');
    } else {
      return;
    }
  }
}

UserService.$inject = ['$http', '$state', 'cartService'];
export default UserService;
