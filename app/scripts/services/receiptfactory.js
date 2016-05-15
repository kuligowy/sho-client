'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.receiptFactory
 * @description
 * # receiptFactory
 * Factory in the shoClientApp.
 */
angular.module('shoClientApp')
  .factory('receiptFactory',['$resource', function ($resource) {
    // Service logic
    var API_URL = "http://localhost:8080/receipt";
    var meaningOfLife = 42;

    // Public API here
    return $resource(API_URL+"/:id",{id: '@id'}, {
            update: {method: 'PUT'},
            addItem: {method: 'POST', url: API_URL+'/:id/item'}
        });
  }]);
