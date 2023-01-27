import React from 'react';

function InputBox(props) {
  return (
    <div className='inputBox'>
      <input type={props.type} 
      placeholder={props.content}
      id={props.id}
      name={props.name}
      label={props.label}
      
      />
    </div>
  );
}

export default InputBox;
