class OrdersService {
  constructor($http, cartSvc, userSvc, $q) {
    this.$http = $http;
    this.cartSvc = cartSvc;
    this.userSvc = userSvc;
    this.$q = $q;
  }

  // manages getting contact info for user
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
      url: '/orders',
      method: 'POST',
      data: order
    }).then((res) => {
      return res.data;
    }).catch((err) => err);
  }

  getPastOrders() {
    return this.$http({
      url: '/api/orders',
      method: 'GET'
    }).then((res) => {
      return res.data;
    }).then((orders) => {
      let promises = orders.map((order) => {
        return this.$http({
          url: `/api/orders/${order.id}`,
          method: 'GET',
        });
      });
      return this.$q.all(promises);
    });
  }
}

OrdersService.$inject = ['$http', 'cartService', 'userService', '$q'];
export default OrdersService;
