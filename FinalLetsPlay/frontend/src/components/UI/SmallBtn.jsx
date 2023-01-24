import React from 'react'

function SmallBtn(props) {
  return (
    <span className='SmallBtn'>
      <button style={{backgroundColor:props.color}}>{props.text}</button>
    </span>
  )
}

export default SmallBtn
