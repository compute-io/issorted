/**
*
*	COMPUTE: issorted
*
*
*	DESCRIPTION:
*		- Returns a boolean indicating if an input array is sorted.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

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
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'issorted()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 ) {
		if ( typeof clbk !== 'function' ) {
			throw new TypeError( 'issorted()::invalid input argument. Comparator must be a function.' );
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
