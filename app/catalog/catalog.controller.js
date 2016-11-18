class CatalogCtrl {
  constructor(catalogSvc, userSvc, cartSvc, $state) {
    this.catalogSvc = catalogSvc;
    this.userSvc = userSvc;
    this.cartSvc = cartSvc;
    this.$state = $state;

    this.catalogSvc.getCameras().then((cameras) => {
      this.cameras = cameras;
    }).catch((err) => err);
  }

  addCamera(camera) {
    if (this.userSvc.currentUser === null) {
      this.$state.go('register');
      return;
    } else {
      this.cartSvc.addCamera(camera);
      Materialize.toast('Added to cart!', 1000);
    }
  }
}

CatalogCtrl.$inject = ['catalogService', 'userService', 'cartService', '$state'];
export default CatalogCtrl;
