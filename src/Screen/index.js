import React, { Component } from 'react';
import './index.css';

const Screen = (props) =>(
	
	<div className="Screen">
	{console.info(props)}
		<div>{props.numOne} {props.numTwo}</div>
		<div>{props.answer}</div>
		

	</div>
);


export default Screen;