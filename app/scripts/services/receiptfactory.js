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
    var API_URL = "http://localhost:8080";
    var meaningOfLife = 42;

    // Public API here
    return $resource(API_URL+"/receipt/:id",{id: '@id'});

  }]);
