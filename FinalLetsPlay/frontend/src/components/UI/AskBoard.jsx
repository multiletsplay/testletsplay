import React from 'react'

function AskBoard() {
  return (
    <div className='MainBoardPersonal'>
    <div className='BoardMain'>
        <div className='topper'>
            <h5>1대1 문의</h5>
            <p>정성껏 답변 드리도록 노력하겠습니다.</p>
        </div>
        <div className='tableForm'>
        <div className='tableData tableDataTop'>
            <div className='DataTitle'>제목</div>
            <div className='DataContent'>배송 문의</div>
        </div>
        <div className='tableData'>
            <div className='DataTitle'>작성자</div>
            <div className='DataContent'>랫플</div>
        </div>
        <div className='tableData'>
            <div className='DataTitle'>작성일</div>
            <div className='DataContent'>2023.01.19</div>
        </div>
        </div>
        <div className='BoardContents'>
            CONTENTS
        </div>
    </div>
    </div>
  )
}

export default AskBoard
