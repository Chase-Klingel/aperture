class OrdersService {
  constructor($http) {
    this.$http = $http;
  }

  getCheckoutDetails() {
    return this.$http({
      url: '/api/orders',
      method: 'GET'
    }).then((res) => {
      return res;
    });
  }

  postOrder(order) {
    return this.$http({
      url: '/api/orders',
      method: 'POST',
      data: order
    }).then((res) => {
      return res.data;
    })
    .catch((err) => err);
  }
}

OrdersService.$inject = ['$http'];
export default OrdersService;
