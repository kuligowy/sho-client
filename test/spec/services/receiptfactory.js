'use strict';

describe('Service: receiptFactory', function () {

  // load the service's module
  beforeEach(module('shoClientApp'));

  // instantiate service
  var receiptFactory;
  beforeEach(inject(function (_receiptFactory_) {
    receiptFactory = _receiptFactory_;
  }));

  it('should do something', function () {
    expect(!!receiptFactory).toBe(true);
  });

});
