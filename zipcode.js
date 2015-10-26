'use strict';
/**
 * Zipcode Filter
 * Automatically format 5 or 9 digit zip codes.
 * i.e. 981222735 => 98122-2735
 * @author Felippe Nardi <felippe.ng-zipcode@nardi.me>
 *
 * @param {number} input the number to be formatted.
 */
angular.module('angular-zipcode-filter',[])
  .filter('zipcode', function () {
    return function (input) {
      if (!input) {
        return input;
      }
      if (input.toString().length === 9) {
        return input.toString().slice(0, 5) + "-" + input.toString().slice(5);
      } else if (input.toString().length === 5) {
        return input.toString();
      } else {
        return input;
      }
    };
  });
