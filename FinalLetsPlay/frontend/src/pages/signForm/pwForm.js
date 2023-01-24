import React from 'react'

function PwForm(props) {
  return (
    <div className='inputForm'>
      <span>{props.title}</span>
      <input type={'password'} placeholder={props.place} style={{fontSize:'small'}}></input>
    </div>
  )
}

export default PwForm
