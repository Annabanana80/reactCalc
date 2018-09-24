import React, { Component } from 'react';

const NumberButton=({ number, appendNumber })=>{
	return(
		<input
			type="button"
			className='button input-button'
			onClick={() => appendNumber(number)}
			value={number}
		/>
	);
}

export default NumberButton;