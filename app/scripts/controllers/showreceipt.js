'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ShowreceiptCtrl
 * @description
 * # ShowreceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ShowReceiptCtrl', ['$scope', function ($scope) {
    $scope.receipt = {
        id: 1,
        shop:{
          id: 1,
          name: 'biedronka'
        },
        items: [{
          item:{
            name: 'cottage chese'
          },
          price: 10,
          quantity: 10
        },
        {
          item:{
            name: 'eggs'
          },
          price: 1.2,
          quantity: 10
        }
      ],
        total: 10,
        eventTime: '2016-03-26'
    };

  }]);
