import React from 'react';
import '../styles/help.css';
import FAQ from '../components/UI/FAQ';
import HelpNav from '../components/UI/HelpNav';

function Help() {

  
    
  return (
    <div className='Main'>
        <HelpNav/>
      <div className='helpMain'>
        <div className='MainContainer'>
          <h5>FAQ</h5>
          <FAQ sort='계정' title='제목 내용' content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.' />
          <FAQ sort='계정' title='제목 내용' content='어쩌구 저쩌구' />
        </div>
      </div>
    </div>
  );
}

export default Help;
