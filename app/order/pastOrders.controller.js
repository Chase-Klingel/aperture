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

      this.pastOrders = this.pastOrders.sort((a, b) => {
        return a.order_id - b.order_id;
      });

      for (let k = 0; k < this.pastOrders.length; k++) {
        this.pastOrders[k].created_at = moment(this.pastOrders[k].created_at).format('MMMM DD, YYYY');
      }
    });
    this.userSvc.verifyUser();
  }
}

PastOrdersCtrl.$inject = ['ordersService', 'userService'];
export default PastOrdersCtrl;
