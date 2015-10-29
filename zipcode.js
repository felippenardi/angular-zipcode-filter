'use strict';
/**
 * Zipcode Filter
 * Automatically format 5 or 9 digit zip codes.
 * i.e. 981222735 => 98122-2735
 * @author Felippe Nardi <felippe.ng-zipcode@nardi.me>
 *
 * @param {number} input the number to be formatted.
 *
 * @return {string|number}
 */
angular.module('angular-zipcode-filter',[])
  .filter('zipcode', function () {
    return function (input) {
      if (!input) {
        return input;
      }
      if (String(input).length === 9) {
        return String(input).slice(0, 5) + "-" + String(input).slice(5);
      } else if (String(input).length === 5) {
        return String(input);
      }
      return input;
    };
  });