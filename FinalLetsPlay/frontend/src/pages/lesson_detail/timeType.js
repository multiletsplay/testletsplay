import React from 'react'

function TimeType(props) {
  return (
        <button className='timeTypeBtn'
         style={{backgroundColor : props.color}}
        >
          {props.time}
        </button>
  );
}

export default TimeType
