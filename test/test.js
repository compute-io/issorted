'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	issorted = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-issorted', function tests() {

	it( 'should export a function', function test() {
		expect( issorted ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			NaN,
			null,
			undefined,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				issorted( value );
			};
		}
	});

	it( 'should throw an error if provided a non-function as a comparator', function test() {
		var values = [
			'5',
			5,
			NaN,
			null,
			undefined,
			true,
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				issorted( [], value );
			};
		}
	});

	it( 'should correctly indicate if an array is sorted', function test() {
		// Sorted:
		assert.strictEqual( issorted( [1,2,3,4] ), true );

		// Not sorted:
		assert.strictEqual( issorted( [1,2,4,3] ), false );

		// Sorted but not in ascending order:
		assert.strictEqual( issorted( [4,3,2,1] ), false );

		// Sorted using a comparator for descending values:
		assert.strictEqual( issorted( [4,3,2,1], descending ), true );

		// Unsorted using a comparator:
		assert.strictEqual( issorted( [1,2,3,4], descending ), false );

		function descending( a, b ) {
			return b - a;
		}
	});

});
