'use strict';

/**
 * @ngdoc function
 * @name shoClientApp.controller:ReceiptNewitemCtrl
 * @description
 * # ReceiptNewitemCtrl
 * Controller of the shoClientApp
 */
angular.module('shoClientApp')
  .controller('ReceiptNewitemCtrl', ['$scope','$log','$routeParams','receiptFactory','articleFactory',
  function ($scope, $log,$routeParams,receiptFactory,articleFactory) {
      //$log.info('Id: '+$routeParams.id);
      $scope.receipt = receiptFactory.get({id:$routeParams.id});
      $scope.receiptItem;

      $scope.addItem = function(){
          $scope.receipt.receiptItems.push($scope.receiptItem);
          $scope.receipt.$update();
      };

      $scope.autocomplete_options = {
        suggest: suggest_users,
        on_select: function (selected) {
          $scope.selectedArticle = selected.obj;
      }};

      function suggest_users(term) {
         var q = term.toLowerCase().trim(),
         results = [];
         var articles = articleFactory.query({name:q});
         for (var i = 0; i < articles; i++) {
           var article = articles[i];
             results.push({
               value: article.name,
               // Pass the object as well. Can be any property name.
               obj: article,
               label: $sce.trustAsHtml(
                 '<div class="row">' +
                 ' <div class="col-xs-5">' +
                 '  <i class="fa fa-user"></i>' +
                 '  <strong>' + highlight(article.name,term) + '</strong>'+
                 ' </div>' +
                 ' <div class="col-xs-7 text-right text-muted">' +
                 '  <small>' + highlight(article.description,term) + '</small>' +
                 ' </div>' +
                 ' <div class="col-xs-12">' +
                 '  <span class="text-muted">Joined</span>' +
                    article.joined +
                 ' </div>' +
                 '</div>'
               )
             });
         }
         return results;
      };



  }]);
