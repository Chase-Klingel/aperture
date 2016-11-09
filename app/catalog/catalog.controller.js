class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;

    this.catalogSvc.getCameras().then((cameras) => {
      this.cameras = cameras;
      console.log(this.cameras);
    }).catch((err) => console.log(err));
  }
}

CatalogCtrl.$inject = ['catalogService'];
export default CatalogCtrl;
