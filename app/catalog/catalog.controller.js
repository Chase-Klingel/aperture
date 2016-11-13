class CatalogCtrl {
  constructor(catalogSvc, userSvc, cartSvc, $state) {
    this.catalogSvc = catalogSvc;
    this.userSvc = userSvc;
    this.cartSvc = cartSvc;

    this.userSvc.verifyUser();

    this.catalogSvc.getCameras().then((cameras) => {
      this.cameras = cameras;
    }).catch((err) => console.log(err));
  }

  addCamera(camera) {
    this.cartSvc.addCamera(camera);
    Materialize.toast('Added to cart!', 1000);
  }
}

CatalogCtrl.$inject = ['catalogService', 'userService', 'cartService', '$state'];
export default CatalogCtrl;
