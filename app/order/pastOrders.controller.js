class PastOrdersCtrl {
  constructor(ordersSvc, userSvc) {
    this.ordersSvc = ordersSvc;
    this.userSvc = userSvc;
    this.pastOrders = [];
    this.ordersSvc.getPastOrders().then((res) => {
      for (let i = 0; i < res.length; i++) {
        let orders = res[i].data.items;
        for (let j = 0; j < orders.length; j++) {
          this.pastOrders.push(orders[j]);
        }
      }
    });
    this.userSvc.verifyUser();
  }
}

PastOrdersCtrl.$inject = ['ordersService', 'userService'];
export default PastOrdersCtrl;
