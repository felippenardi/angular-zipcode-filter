'use strict';

describe('Filter: zipcode', function () {

  // load the filter's module
  beforeEach(module('angular-zipcode-filter'));

  // initialize a new instance of the filter before each test
  var zipcode;
  beforeEach(inject(function ($filter) {
    zipcode = $filter('zipcode');
  }));

  it('adds a dash after the 5th character of a 9-digit zip code', function () {
    var input = 981222735;
    expect(zipcode(input)).toBe('98122-2735');
  });

  it('doesnt add a dash after on a 5-digit zip code', function () {
    var input = 98122;
    expect(zipcode(input)).toBe('98122');
  });

  it('does nothing if input doesnt have 9 or 5 digits', function () {
    expect(zipcode(1234567890)).toBe(1234567890);
  });

  it('does nothing if input is undefined', function () {
    expect(zipcode()).toBe();
  });

  it('does nothing if input is null', function () {
    expect(zipcode(null)).toBe(null);
  });
});
