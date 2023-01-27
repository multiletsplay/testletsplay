import React from 'react'

function AskBoard(props) {

    


  return (
    <div className='MainBoardPersonal'>
    <div className='BoardMain'>
        <div className='topper'>
            <h5>공지사항</h5>
            <p>정성껏 답변 드리도록 노력하겠습니다.</p>
        </div>
        <div className='tableForm'>
        <div className='tableData tableDataTop'>
            <div className='DataTitle'>제목</div>
            <div className='DataContent'>{props.noticeTitle}</div>
        </div>
        <div className='tableData'>
            <div className='DataTitle'>작성자</div>
            <div className='DataContent'>{props.id}</div>
        </div>
        <div className='tableData'>
            <div className='DataTitle'>작성일</div>
            <div className='DataContent'>{props.noticeDate}</div>
        </div>
        </div>
        <div className='BoardContents'>
            {props.noticeContent}
        </div>
    </div>
    </div>
  )
}

export default AskBoard
