'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ReceiptCtrl
 * @description
 * # ReceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ReceiptCtrl', ['$scope','receiptFactory',function ($scope,receiptFactory) {

    $scope.receipts = receiptFactory.query();
    
}
]);
