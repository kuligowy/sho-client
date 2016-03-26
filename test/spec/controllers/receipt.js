'use strict';

describe('Controller: ReceiptCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var ReceiptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiptCtrl = $controller('ReceiptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(ReceiptCtrl.awesomeThings.length).toBe(3);
  // });
});
