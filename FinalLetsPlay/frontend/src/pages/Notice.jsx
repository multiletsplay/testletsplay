import React from 'react';
import HelpNav from '../components/UI/HelpNav';
import '../styles/notice.css';
import NoticeMain from '../components/UI/NoticeMain'

function Notice() {
  return (
    <div className='Main'>
      <HelpNav />
      <div className='noticeMain'>
        <div className='NoticeContainer'>
          <h5>공지사항</h5>
          <NoticeMain title='공지 알립니다!' date='2023.01.16' content='어쩌구 저쩌구'/>
          <NoticeMain title='서비스 점검 안내사항' date='2023.01.07' content='어쩌구 저쩌구' />
          <NoticeMain title='CEO 사퇴' date='2023.01.01' content='어쩌구 저쩌구' />
          <NoticeMain title='이벤트 안내' date='2022.12.31' content='어쩌구 저쩌구' />
          <NoticeMain title='시설 업데이트' date='2014.04.19' content='어쩌구 저쩌구' />
          <NoticeMain title='CEO 사퇴' date='2023.01.01' content='어쩌구 저쩌구' />
          <NoticeMain title='CEO 사퇴' date='2023.01.01' content='어쩌구 저쩌구' />
          <NoticeMain title='CEO 사퇴' date='2023.01.01' content='어쩌구 저쩌구' />
          <NoticeMain title='CEO 사퇴' date='2023.01.01' content='어쩌구 저쩌구' />
        </div>
      </div>
    </div>
  );
}

export default Notice;
