import React from 'react'
import SmallBtn from './SmallBtn'
import { useState } from 'react';

function PersonalMain(props) {
  const [show, setShow] = useState();
  const Appearance = () => {
    setShow(!show)
  }
  let result = show ? "안녕히 계세요" : "";
  return (
    <div className='Bundle'>
      <span className='titleSection' onClick={Appearance}>
      <span className='FirstSection'>
      <SmallBtn color={props.color} text={props.text}/>
        <span className='TitleQs'><button type='button'>{props.TitleQs}</button></span>
        <span className="material-symbols-outlined">lock</span>
        </span>
        <span className='SecondSection'>
        <span className='nickName'>{props.NickName}</span>
        <span>{props.date}</span>
        </span>
      </span>
      <div className='PersonalResult'>
        {result}
      </div>
    </div>
  )
}

export default PersonalMain
