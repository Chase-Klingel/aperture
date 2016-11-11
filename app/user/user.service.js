class UserService {
  constructor($http, $state, currentUser) {
    this.$state = $state;
    this.$http = $http;
    this.loggedIn = false;
    this.currentUser = '';
    this.$http({
      url: '/api/token',
      method: 'GET'
    }).then((res) => {
      this.loggedIn = res.data;
      console.log(this.loggedIn);
      return res;
    })
  }

  signUp(user) {
    return this.$http({
      url: '/api/users',
      method: 'POST',
      data: user
    }).then((res) => {
      return res;
    }).catch((err) => err);
  }

  logIn(user) {
    return this.$http({
      url: '/api/token',
      method: 'POST',
      data: user
    }).then((res) => {
      console.log(this.currentUser);
      this.currentUser = res.data;
      this.loggedIn = true;
      return res;
    })
  }

  logout() {
    return this.$http({
      url: '/api/token',
      method: 'DELETE'
    }).then((res) => {
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

UserService.$inject = ['$http', '$state'];
export default UserService;
