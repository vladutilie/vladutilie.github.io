"use strict"

document.getElementById( "compute" ).onclick = function() {
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

	let max1 = 0, max1_i = 0;
	let max2 = 0, max2_i = 0;
	arr.map((item, i) => {
		if ( item > max1 ) {
			max1 = item;
			max1_i = i;
		}
	});
	arr.map((item, i) => {
		if ( item > max2 && item < max1 ) {
			max2 = item;
			max2_i = i;
		}
	});

	const biggestNo = [];
	arr.map((item, i) => {
		if ( item === max1 || item === max2 ) {
			biggestNo.push( i );
		}
	});

	document.getElementById('results').value = '';
	for ( let i = 0; i < 10; i++ ) {
		const finalArr = [];
		while ( finalArr.length < 6 ) {
			let r = Math.floor( Math.random() * biggestNo.length );
			if ( finalArr.indexOf( biggestNo[r] ) === -1 ) {
				finalArr.push( biggestNo[ r ] );
			}
		}
		document.getElementById('results').value += finalArr + "\n\n";
	}
}
