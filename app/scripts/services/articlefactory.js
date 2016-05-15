'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.articlefactory
 * @description
 * # articlefactory
 * Factory in the shoClientApp.
 */
angular.module('shoClientApp')
  .factory('articleFactory',['$resource', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    var API_URL = 'http://localhost:8080/';
    var meaningOfLife = 42;
    // Public API here
    return $resource(API_URL+'article/:id', {id: '@id'});
  }]);
