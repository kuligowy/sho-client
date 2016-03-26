'use strict';

/**
 * @ngdoc service
 * @name shoClientApp.receiptFactory
 * @description
 * # receiptFactory
 * Factory in the shoClientApp.
 */
angular.module('shoClientApp')
  .factory('receiptFactory',[function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
