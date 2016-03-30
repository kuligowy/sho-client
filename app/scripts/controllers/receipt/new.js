'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:NewreceiptCtrl
 * @description
 * # NewreceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('NewReceiptCtrl', ['$scope','_','$log','$location',function ($scope,_,$log,$location) {
    $scope.shops = [{id: 1, name: 'biedronka' }, { id: 2, name: 'lidl' }];
    $scope.receipt = {
      eventTime: new Date()
    };

    $scope.save = function(){
      $log.info('saving receipt...');
      $location.path("/receipt/1/items")
    }

  }]);
