class CatalogService {
  constructor($http) {
    this._$http = $http;
  }

  getCameras() {
    return this._$http({
      url: '/api/cameras',
      method: 'GET'
    }).then((cameras) => {
      return cameras.data;
    }).catch((err) => {
      return err;
    });
  }
}

export default CatalogService;
