'use strict';

describe('Service: articlefactory', function () {

  // load the service's module
  beforeEach(module('shoClientApp'));

  // instantiate service
  var articlefactory;
  beforeEach(inject(function (_articlefactory_) {
    articlefactory = _articlefactory_;
  }));

  it('should do something', function () {
    expect(!!articlefactory).toBe(true);
  });

});
