class LoginCtrl {
  constructor(userSvc, $state) {
    this.userSvc = userSvc;
    this.$state = $state;

    this.email = '';
    this.password = '';
  }

  logIn() {
    const user = {
      email: this.email,
      password: this.password
    };

    if (!user.email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (!user.password) {
      return Materialize.toast('Password must not be blank', 3000);
    }

    this.userSvc.logIn(user).then((res) => {
      console.log(this.userSvc.currentUser);
      this.$state.go('home');
    }).catch((err) => {
      Materialize.toast('Bad email or password.', 4000);
      this.$state.go('login');
    });
  }
}

LoginCtrl.$inject = ['userService', '$state'];
export default LoginCtrl;
