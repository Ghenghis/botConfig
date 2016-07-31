'use strict';

describe('Directive: fallbackSrc', function () {

  // load the directive's module
  beforeEach(module('botConfApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fallback></fallback>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fallback directive');
  }));
});
