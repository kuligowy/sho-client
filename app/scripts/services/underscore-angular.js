'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.underscore
 * @description
 * # underscore
 * Service in the shoClientApp.
 */
var underscore = angular.module('underscore', []);
 underscore.factory('_', ['$window', function() {
   return window._;
 }]);
