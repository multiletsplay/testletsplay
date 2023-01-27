import React from 'react'

const FormWrapInput = (props) => {
  return (
    <div className='form__wrap'>
      <span>
        <label for={props.label}>
          <div>
            <p>{props.text}</p>
          </div>
        </label>
        
        <div>
          <input type={props.type} name={props.name} placeholder={props.valueEdit} value={props.value}/>
        </div>
      </span>
    </div>
  )
}

export default FormWrapInput
