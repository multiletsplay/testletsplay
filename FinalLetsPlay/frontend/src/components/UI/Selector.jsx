import React from 'react'
import {Link} from 'react-router-dom'

function Selector(props) {
  return (
    <Link to={props.addr}>
        <button className='selector' type='button'>{props.content}</button>
    </Link>
    )
}

export default Selector
