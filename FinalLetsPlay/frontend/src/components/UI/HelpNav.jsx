import React from 'react';
// import '../Front_End/src/styles/help.css';
import Selector from './Selector';

function HelpNav(){
    return (
    <div className='helpTop'>
      <div className='helpContainer'>
        <h1>고객센터</h1>
        <div className='selectorContainer'>
          <Selector addr='/help' content='FAQ' />
          <Selector addr='/notice' content='공지사항' />
          <Selector addr='/personal' content='1대1 문의' />
        </div>
      </div>
    </div>
    );}

  export default HelpNav;