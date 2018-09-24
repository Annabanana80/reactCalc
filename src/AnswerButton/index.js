import React, { Component } from 'react';

const AnswerButton = ({answer, appendAnswer}) => {
  return (
    <input
      type="button"
      className='button action-button'
      onClick={()=> appendAnswer(answer)}
      value={answer}
    />
  );
}

	
export default AnswerButton;