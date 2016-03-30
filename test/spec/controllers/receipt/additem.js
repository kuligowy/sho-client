'use strict';

describe('Controller: ReceiptNewitemCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var ReceiptNewitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiptNewitemCtrl = $controller('ReceiptNewitemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReceiptNewitemCtrl.awesomeThings.length).toBe(3);
  });
});
