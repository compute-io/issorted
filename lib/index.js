'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

// ISSORTED //

/**
* FUNCTION: issorted( arr[, comparator] )
*	Returns a boolean indicating if an input array is sorted.
*
* @param {Array} arr - input array
* @param {Function} [comparator] - comparator function invoked for each pair of consecutive elements which returns a numeric value indicating if elements are ordered
* @returns {Boolean} boolean indicating if array is sorted
*/
function issorted( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'issorted()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'issorted()::invalid input argument. Comparator must be a function. Value: `' + clbk + '`.' );
		}
	}
	var len = arr.length,
		i;
	if ( !clbk ) {
		// Default: ascending order...
		for ( i = 0; i < len-1; i++ ) {
			if ( arr[ i ] > arr[ i+1 ] ) {
				return false;
			}
		}
		return true;
	}
	// Impose arbitrary sort order...
	for ( i = 0; i < len-1; i++ ) {
		if ( clbk( arr[i], arr[i+1] ) > 0 ) {
			return false;
		}
	}
	return true;
} // end FUNCTION issorted()


// EXPORTS //

module.exports = issorted;
