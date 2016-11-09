import angular from 'angular';
import uiRouter from 'angular-ui-router'
import CartCtrl from './cart/cart.controller';
import CatalogCtrl from './catalog/catalog.controller';
import SearchCtrl from './search/search.controller';
import NavCtrl from './nav/nav.controller';
import CatalogService from './catalog/catalog.service';


angular.module('cameraApp', [uiRouter])
  .service('catalogService', CatalogService)
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
      controllerAs: 'catalogCtrl',
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth.html',
    })
    .state('orders', {
      url: '/orders',
      templateUrl: 'views/orders.html',
      controller: 'CatalogCtrl',
      controllerAs: 'catalogCtrl',
      title: 'orders'
    })
  }])
  .controller('NavCtrl', NavCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CatalogCtrl', CatalogCtrl, ['$scope', '$state', 'cameras', function($scope, $state, cameras) {
    this.cameras = cameras;
    $scope.state = $state;
  }])
  .controller('SearchCtrl', SearchCtrl);
