import React from 'react';

function InputBox(props) {
  return (
    <div className='inputBox'>
      <input type={'text'} placeholder={props.content}></input>
    </div>
  );
}

export default InputBox;
