import React, { Component } from 'react';

const OperatorButton = ({ operator, appendOperator})=>{
	return(
		<input
			type="button"
			className="button action-button"
			onClick={() => appendOperator(operator)}
			value={operator}
		/>
	);
}

export default OperatorButton;