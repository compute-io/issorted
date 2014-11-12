issorted
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns a boolean indicating if an input array is sorted.


## Installation

``` bash
$ npm install compute-issorted
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var issorted = require( 'compute-issorted' );
```

#### issorted( arr[, comparator] )

Returns a `boolean` indicating if an input `array` is sorted.

``` javascript
var bool = issorted( [ 2, 6, 13, 5 ] );
// returns false
```

By default, the function checks if the input `array` is sorted in __ascending__ order. To impose a different order, provide a `comparator` function.

``` javascript
// Descending order...
function comparator( a, b ) {
	return b - a;
}

var bool = issorted( [ 13, 6, 5, 2 ], comparator );
// returns true
```

The `comparator` function should behave the same as a comparator provided to [`arr.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

The comparator should take two arguments: `a` and `b`, where `a` and `b` are consecutive `array` elements. If the comparator returns a `numeric` value less than or equal to `0`, consecutive elements are considered sorted; otherwise, `issorted` returns `false`. 


## Examples

``` javascript
var issorted = require( 'compute-issorted' ),
	shuffle = require( 'compute-shuffle' );

// Simulate some data...
var data = new Array( 5 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

// Randomly shuffle the data and check if sorted...
var bool;
console.log( 'Data\t\tSorted?' );
for ( var j = 0; j < 100; j++ ) {
	shuffle( data );
	bool = issorted( data );
	console.log( data.join( ',' )+'\t'+bool );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

This function runs in linear time: `O(N)`, where `N` is the input `array` length.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-issorted.svg
[npm-url]: https://npmjs.org/package/compute-issorted

[travis-image]: http://img.shields.io/travis/compute-io/issorted/master.svg
[travis-url]: https://travis-ci.org/compute-io/issorted

[coveralls-image]: https://img.shields.io/coveralls/compute-io/issorted/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/issorted?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/issorted.svg
[dependencies-url]: https://david-dm.org/compute-io/issorted

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/issorted.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/issorted

[github-issues-image]: http://img.shields.io/github/issues/compute-io/issorted.svg
[github-issues-url]: https://github.com/compute-io/issorted/issues
