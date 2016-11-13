class RegisterCtrl {
  constructor(userSvc, $state) {
    this.userSvc = userSvc;
    this.$state = $state;

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  signUp() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    if (!user.firstName) {
      return Materialize.toast('First name must not be blank', 3000);
    }

    if (!user.lastName) {
      return Materialize.toast('Last name must not be blank', 3000);
    }

    if (!user.email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (user.email.indexOf('@') < 0) {
      return Materialize.toast('Invalid email', 3000);
    }

    if (!user.password || user.password.length < 8) {
      return Materialize.toast('Password must be at least 8 characters long',
        3000);
    }

    this.userSvc.signUp(user).then((res) => {
      this.$state.go('login');
    }).catch((err) => {
      Materialize.toast('Sorry, there was an error. Please try again.', 4000);
      this.$state.go('register');
    });
  }
}

RegisterCtrl.$inject = ['userService', '$state'];
export default RegisterCtrl;
