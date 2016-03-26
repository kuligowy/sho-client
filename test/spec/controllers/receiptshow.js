'use strict';

describe('Controller: ReceiptshowCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var ReceiptshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiptshowCtrl = $controller('ReceiptshowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(ReceiptshowCtrl.awesomeThings.length).toBe(3);
  // });
});
