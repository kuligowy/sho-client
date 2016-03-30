'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.underscore
 * @description
 * # underscore
 * Service in the shoClientApp.
 */
angular.module('underscore', []).factory('_', ['$window', function() {
   return window._;
 }]);
