class CatalogCtrl {
  constructor(catalogSvc, userSvc, $state) {
    this.catalogSvc = catalogSvc;
    this.userSvc = userSvc;

    this.userSvc.verifyUser();

    this.catalogSvc.getCameras().then((cameras) => {
      this.cameras = cameras;
    }).catch((err) => console.log(err));
  }
}

CatalogCtrl.$inject = ['catalogService', 'userService', '$state'];
export default CatalogCtrl;
