import React, {useState, useEffect} from 'react';
import HelpNav from '../components/UI/HelpNav';
import '../styles/notice.css';
import NoticeMain from '../components/UI/NoticeMain'
import axios from 'axios';

function Notice() {

   const [ noitce, setNotice ] = useState();
   useEffect(()=>{
        axios.get('/notice/list')
        .then((response) => {
          setNotice(response.data.noticelist)      
        })
        .catch(error => console.log(error))
    },[]);

  return (
    <div className='Main'>
      <HelpNav />
      <div className='noticeMain'>
        <div className='NoticeContainer'>
          <h5>공지사항</h5>
            {noitce && noitce.map((notice, index) => (
                <NoticeMain notice={notice} key={index}/>
            ))
               
            }
           
        </div>
      </div>
    </div>
  );
}

export default Notice;
