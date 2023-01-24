import React from 'react'

function InputForm(props) {
  return (
    <div className='inputForm'>
      <span>{props.title}</span>
      <input type={'text'} placeholder={props.place}></input>
    </div>
  )
}

export default InputForm
