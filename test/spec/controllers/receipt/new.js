'use strict';

describe('Controller: NewreceiptCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var NewreceiptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewreceiptCtrl = $controller('NewreceiptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(NewreceiptCtrl.awesomeThings.length).toBe(3);
  // });
});
