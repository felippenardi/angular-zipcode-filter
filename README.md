# angular-zipcode-filter

AngularJS filter to automatically format long and short zip codes.

## Installation

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install angular-zipcode-filter
```

Or [npm](https://www.npmjs.com/):

```bash
$ npm install angular-zipcode-filter
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-zipcode-filter/zipcode.js"></script>
<script src="node_modules/angular-zipcode-filter/zipcode.js"></script>
```

And inject the module `angular-zipcode-filter` as a dependency in your application:

```js
angular.module('webApp', ['angular-zipcode-filter']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ 928861617 | zipcode }}</p>
```

The output will be:
```html
<p>92886-1617</p>
```

## Testing

To run the tests:

```bash
$ npm install && bower install
$ grunt test
```
