import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/notice.css';

function NoticeMain(props) {
  return (
    <Link to='/askboard'>
    <div className='notice'>
      <div>
      <h5>{props.title}</h5>
      <p className='noticeDate'>{props.date}</p>
      </div>
    </div>
    </Link>
  );
}

export default NoticeMain;
