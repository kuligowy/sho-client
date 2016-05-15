'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:NewreceiptCtrl
 * @description
 * # NewreceiptCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('NewReceiptCtrl', ['$scope','$log','$location','shopFactory','receiptFactory',
      function ($scope,$log,$location,shopFactory,receiptFactory) {
    //$scope.shops = [{id: 1, name: 'biedronka' }, { id: 2, name: 'lidl' }];
    $scope.shops = shopFactory.query();
    $scope.receipt = {
      eventTime: new Date()
    };
    $scope.save = function(){
      $log.info('saving receipt...');
      receiptFactory.save($scope.receipt,function(response,headers){
        $log.info();
      //  id = response.id;
      $location.path("/receipt/"+response.id+"/item");
      });
    };

  }]);
