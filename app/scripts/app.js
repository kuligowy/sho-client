'use strict';

/**
 * @ngdoc overview
 * @name shoClientApp
 * @description
 * # shoClientApp
 *
 * Main module of the application.
 */


angular
  .module('shoClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'underscore'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/receipt/list.html',
        controller: 'ReceiptCtrl',
        controllerAs: 'receipt'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/receipts', {
        templateUrl: 'views/receipt/list.html',
        controller: 'ReceiptCtrl',
        controllerAs: 'receipt'
      })
      .when('/receipts/:id', {
        templateUrl: 'views/receipt/show.html',
        controller: 'ShowReceiptCtrl',
        controllerAs: 'showReceipt'
      })
      .when('/receipt',{
          templateUrl: 'views/receipt/new.html',
          controller: 'NewReceiptCtrl',
          controllerAs: 'newReceiptCtrl'
      })
      .when('/receipt/:id/items', {
        templateUrl: 'views/receipt/additem.html',
        controller: 'ReceiptNewitemCtrl',
        controllerAs: '/receipt/additem'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
