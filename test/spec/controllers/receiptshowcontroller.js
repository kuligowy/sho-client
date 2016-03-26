'use strict';

describe('Controller: ReceiptshowcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var ReceiptshowcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiptshowcontrollerCtrl = $controller('ReceiptshowcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(ReceiptshowcontrollerCtrl.awesomeThings.length).toBe(3);
  // });
});
