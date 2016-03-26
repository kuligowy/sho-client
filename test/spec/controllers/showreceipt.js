'use strict';

describe('Controller: ShowreceiptCtrl', function () {

  // load the controller's module
  beforeEach(module('shoClientApp'));

  var ShowreceiptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowreceiptCtrl = $controller('ShowreceiptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(ShowreceiptCtrl.awesomeThings.length).toBe(3);
  // });
});
