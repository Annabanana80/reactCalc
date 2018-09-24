import React, { Component } from 'react';

const ColorButton=({ color, changeColor})=>{
	return(
		<input
			type="button"
			className='button action-button'
			onClick={() => changeColor(color)}
			value={color}
		/>
	);
}

export default ColorButton;