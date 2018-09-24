import React, { Component } from 'react';

const ModifierButton = ({ modifier, appendModifier})=>{
	return(
		<input
			type="button"
			className="button action-button"
			onClick={() => appendModifier(modifier)}
			value={modifier}
		/>
	);
}

export default ModifierButton;