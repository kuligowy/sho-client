'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:NewreceiptCtrl
 * @description
 * # NewreceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('NewReceiptCtrl', ['$scope','_',function ($scope,_) {
    $scope.receipt = {
      eventTime: new Date(),
      receiptItems: []
    };
    $scope.total = function(){
      return $scope.receipt.items.length;
    };

    $scope.receiptItem = {
        item: {},
        price: 0,
        quantity: 0
    };
    $scope.sum = [];
    $scope.addItem = function(){
      $scope.receipt.receiptItems.push($scope.receiptItem);
      $scope.receiptItem = {};
    };

  }]);
