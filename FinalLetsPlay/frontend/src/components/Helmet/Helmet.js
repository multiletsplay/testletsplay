import React from 'react'

const Helmet = (props) => {

  document.title = '렛플 :: LetsPlay - ' + props.title
  return (
    <div className='w-100'>
      {props.children}
    </div>
  )
}

export default Helmet
