'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ReceiptNewitemCtrl
 * @description
 * # ReceiptNewitemCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ReceiptNewitemCtrl', ['$scope','$log','$routeParams', function ($scope, $log,$routeParams) {
      //$log.info('Id: '+$routeParams.id);
      $scope.receipt = {
        id: $routeParams.id,
        items: []
      }
      $scope.receiptItem;

      $scope.addItem = function(){
          $scope.receipt.items.push($scope.receiptItem);
          $scope.receiptItem = {};
      }
  }]);
