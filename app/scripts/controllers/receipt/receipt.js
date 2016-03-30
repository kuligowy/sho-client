'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ReceiptCtrl
 * @description
 * # ReceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ReceiptCtrl', ['$scope',function ($scope) {

    $scope.receipts = [{
        id: 1,
        shop:{
          id: 1,
          name: 'biedronka'
        },
        total: 10,
        eventTime: '2016-03-26'
    },{
        id: 2,
        shop:{
          id: 1,
          name: 'biedronka'
        },
        total: 20,
        eventTime: '2016-03-24'
    }
  ];
}]);
