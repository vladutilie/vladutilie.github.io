"use strict"

const lines = document.getElementById( 'input-values' ).value.split( '\n' );
const arr = [];
let line;

for ( let i = 0; i < lines.length; i++ ) {
	line = parseInt( lines[ i ] );
	if ( ! isNaN( line ) ) {
		if ( arr[ line ] !== undefined ) {
			arr[ line ]++;
		} else {
			arr[ line ] = 1;
		}
	}
}

const first_six = [];
console.log(arr)
let max;
let last_i;
for ( let j = 0; j < 6; j++ ) {
	max = 0;
	last_i = 0;
	arr.map((item, index) => {
		if ( item > max ) {
			max = item;
			last_i = index;
		}
	});
	arr[ last_i ] = 0;
	first_six.push( last_i );
}

/*
 * @author: https://stackoverflow.com/a/43260158/9379697
 */
function perm(xs) {
	let ret = [];
	for ( let i = 0; i < xs.length; i = i + 1 ) {
		let rest = perm( xs.slice( 0, i ).concat( xs.slice( i + 1 ) ) );

		if ( ! rest.length ) {
			ret.push( [ xs[ i ] ] );
		} else {
			for ( let j = 0; j < rest.length; j = j + 1 ) {
				ret.push( [ xs[ i ] ].concat( rest[ j ] ) );
			}
		}
	}
	return ret;
}

console.log( perm(first_six) );
