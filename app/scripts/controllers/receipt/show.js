'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ShowreceiptCtrl
 * @description
 * # ShowreceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ShowReceiptCtrl', ['$scope','$log','$routeParams','receiptFactory',
    function ($scope,$log, $routeParams,receiptFactory) {
    $scope.id = $routeParams.id;
    $log.info("id _ "+$scope.id)
    $scope.receipt = receiptFactory.get({id: $scope.id});

  }]);
