'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.shopService
 * @description
 * # shopService
 * Factory in the shoClientApp.
 */
angular.module('shoClientApp')
  .factory('shopFactory', ['$resource',function ($resource) {
    // Service logic
    var API_URL = 'http://localhost:8080/';
    var meaningOfLife = 42;
    // Public API here
    return $resource(API_URL+'shop/:id', {id: '@id'});
  }]);
