import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookie from 'angular-cookies';
import CartCtrl from './cart/cart.controller';
import CatalogCtrl from './catalog/catalog.controller';
import NavCtrl from './nav/nav.controller';
import OrderCtrl from './order/order.controller';
import RegisterCtrl from './user/register.controller';
import LoginCtrl from './user/login.controller';
import PastOrdersCtrl from './order/pastOrders.controller';
import SearchCtrl from './search/search.controller';
import CartService from './cart/cart.service';
import CatalogService from './catalog/catalog.service';
import OrdersService from './order/orders.service';
import UserService from './user/user.service';

angular.module('cameraApp', [uiRouter, ngCookie])
  .service('cartService', CartService)
  .service('catalogService', CatalogService)
  .service('ordersService', OrdersService)
  .service('userService', UserService)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: 'CatalogCtrl',
      controllerAs: 'catalogCtrl'
    })
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'CatalogCtrl',
      controllerAs: 'catalogCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'registerCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'loginCtrl'
    })
    .state('orders', {
      url: '/orders',
      templateUrl: 'views/orders/orders.html',
      controller: 'OrderCtrl',
      controllerAs: 'orderCtrl'
    })
    .state('pastOrders', {
      url: '/pastOrders',
      templateUrl: 'views/pastOrders.html',
      controller: 'PastOrdersCtrl',
      controllerAs: 'pastOrdersCtrl'
    })
    .state('orders.checkout', {
      url: '/checkout',
      templateUrl: 'views/orders/checkout.html',
      controller: 'OrderCtrl',
      controllerAs: 'orderCtrl'
    })
  }])
  .controller('NavCtrl', NavCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('OrderCtrl', OrderCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('PastOrdersCtrl', PastOrdersCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('SearchCtrl', SearchCtrl);
