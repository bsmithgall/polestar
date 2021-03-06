'use strict';

describe('Directive: vgSpecEditor', function() {

  // load the directive's module
  beforeEach(module('vleApp'));

  beforeEach(module('vleApp', function($provide) {
    $provide.constant('vl', vl); // vl is loaded by karma

    // mock directive (trodrigues's answer in http://stackoverflow.com/questions/17533052)
    $provide.factory('uiZeroclipDirective', function() {return {
      link: function() {}
    };});
  }));

  var element,
    scope;

  beforeEach(module('vleApp', function($provide) {
    var mock = {
      vgSpec: {}
    };
    $provide.value('Spec', mock);
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show source code', inject(function($compile) {
    element = angular.element('<vg-spec-editor></vg-spec-editor>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.vgspec').val()).toBe('{}');
  }));
});
