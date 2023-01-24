import React from 'react'

function EmailForm(props) {
  return (
    <div className='inputForm'>
      <span>{props.title}</span>
      <input type={'email'} placeholder={props.place}></input>
    </div>
  )
}

export default EmailForm
