import React, { Component } from 'react';
import './Container.css';
import Screen from '../Screen/Screen';
import NumberButton from '../NumberButton/NumberButton';
import OperatorButton from '../OperatorButton/OperatorButton';
import ModifierButton from '../ModifierButton/ModifierButton';
import AnswerButton from '../AnswerButton/AnswerButton';
import ColorButton from '../ColorButtons/ColorButtons';

class Container extends Component {
	constructor(props){
		super(props);
		this.state ={
			numOne: '',
			numTwo: '',
			op: '',
			answer: '',
			randcolor: [0,128,0]
			
		}
	this.appendNumber=this.appendNumber.bind(this);
	this.appendModifier=this.appendModifier.bind(this);
	this.appendOperator=this.appendOperator.bind(this);
	this.appendAnswer=this.appendAnswer.bind(this);
	this.changeColor=this.changeColor.bind(this);
	
	}
	


	appendNumber = (number) => {
		if(this.state.op == '' && this.state.numTwo == ''){
			this.setState({
				numOne: String(this.state.numOne) + String(number)
			});
		}
			//once the operator is clicked, find a way to not add any more numbers to numOne
		if(this.state.numOne !== '' && this.state.op !== ''){
			this.setState({
				numTwo: String(this.state.numTwo) + String(number)
			});
		}
	}
	/// make applicable to numTwo as well
	appendModifier = (modifier) => {
		switch (modifier){
			case 'AC':
				this.setState({
					numOne: '',
					numTwo: '',
					op: '',
					answer: ''
				})
				break
			case '+/-':
				this.setState({
					numOne: parseFloat(this.state.numOne) * -1
				})
				break
			case '%':
				this.setState({
					numOne: parseFloat(this.state.numOne)/100
				})
				break
		}		 
	
	}
	appendOperator = (operator) =>{
		switch(operator){
			case '+':
				this.setState({
					op: this.state.op = "+"
				})				
				break
			case '-':
				this.setState({
					op: this.state.op="-"
				})
			break
			case '/':
				this.setState({
					op: this.state.op="/"
				})
			break
			case '*':
				this.setState({
					op: this.state.op="*"
				})
			break
			
		}
	}

	appendAnswer=(answer)=>{
		this.setState({
			answer: this.state.answer
		})
		if(this.state.op==='+'){
			this.setState({
				answer: parseFloat(this.state.numOne) + parseFloat(this.state.numTwo)
			})
		}else if(this.state.op==='-'){
			this.setState({
				answer: parseFloat(this.state.numOne) - parseFloat(this.state.numTwo)
			})
		}else if(this.state.op==='/'){
			this.setState({
				answer: parseFloat(this.state.numOne)/parseFloat(this.state.numTwo)
			})
		}else if(this.state.op==='*'){
			this.setState({
				answer: parseFloat(this.state.numOne) * parseFloat(this.state.numTwo)
			})
		}
	}
	changeColor=(color)=>{
		var randcolor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		this.setState({
			randcolor: randcolor
		
		});
	}
	
	render(){
		return (
		<div className="Container" style={{backgroundColor:this.state.randcolor}}>
			<div className="row">
				<Screen numOne={this.state.numOne} numTwo={this.state.numTwo} op={this.state.op} answer={this.state.answer}/>
			</div>
			<div className="row">
				<ModifierButton modifier='AC'   appendModifier={this.appendModifier} />
				<ModifierButton modifier='+/-'   appendModifier={this.appendModifier} />
				<ModifierButton modifier='%'   appendModifier={this.appendModifier} />
				<OperatorButton operator='/'   appendOperator={this.appendOperator} />
			</div>
			<div className="row">
				<NumberButton number='7'   appendNumber={this.appendNumber} />
				<NumberButton number='8'   appendNumber={this.appendNumber} />
				<NumberButton number='9'  appendNumber={this.appendNumber} />
				<OperatorButton operator='*'   appendOperator={this.appendOperator} />
			</div>
			<div className="row">
				<NumberButton number='4'   appendNumber={this.appendNumber} />
				<NumberButton number='5'  appendNumber={this.appendNumber} />
				<NumberButton number='6'   appendNumber={this.appendNumber} />
				<OperatorButton operator='-'   appendOperator={this.appendOperator} />
			</div>
			<div className="row">
				<NumberButton number='1'   appendNumber={this.appendNumber} />
				<NumberButton number='2'   appendNumber={this.appendNumber} />
				<NumberButton number='3'   appendNumber={this.appendNumber} />
				<OperatorButton operator='+'   appendOperator={this.appendOperator} />
			</div>
			<div className="row">
				<NumberButton number='0'   appendNumber={this.appendNumber} />
				<NumberButton number='.'   appendNumber={this.appendNumber} />
				<AnswerButton answer='='  appendAnswer={this.appendAnswer} />
				<ColorButton color='Click Me!' changeColor={this.changeColor} />
			</div>
		</div>

		);
	
	}
}
	
export default Container;