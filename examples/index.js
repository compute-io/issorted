'use strict';

var issorted = require( './../lib' ),
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
