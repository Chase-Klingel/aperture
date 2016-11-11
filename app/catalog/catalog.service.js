class CatalogService {
  constructor($http) {
    this.$http = $http;
  }

  getCameras() {
    return this.$http({
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
