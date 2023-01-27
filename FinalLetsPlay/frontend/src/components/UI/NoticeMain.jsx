import React from "react";
import { Link } from 'react-router-dom';
// import '../styles/notice.css';

function NoticeMain({notice}) {

  
  
  return (

  
      <Link to={`/askboard/${notice.noticeSeq}`} >
      <div className='notice'>
        <div>
        <h5>{notice.noticeTitle}</h5>
        <p className='noticeDate'>{notice.noticeDate}</p>
        </div>
      </div>
      </Link>
  );
}

export default NoticeMain;
