import React from 'react'
import '../styles/registration.css';
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className='regWrap'>
      <div className='regMain'>
        <div className='regBanner'>매칭을 직접 만들어 보세요!</div>
        <div className='regTitle'>
          <h3>매칭 제목을 등록해 주세요</h3>
          <input type="text" placeholder='제목을 입력하시오'/>
        </div>
        <div className='regSelectorFirst'>
          <h3>스포츠 종목을 선택해 주세요</h3>
          <select name="" id="">
            <option value="">종목</option>
            <option value="">풋살</option>
            <option value="">수영</option>
            <option value="">테니스</option>
            <option value="">배드민턴</option>
            <option value="">탁구</option>
          </select>
          </div>
          <div className='regSelectorSecond'>
          <h3>경기 레벨을 선택해 주세요</h3>
            <select name="" id="">
              <option value="">레벨</option>
              <option value="">스타터</option>
              <option value="">비기너</option>
              <option value="">아마추어</option>
              <option value="">세미프로</option>
              <option value="">프로</option>
            </select>
          </div>
          <div className='regSelectorDate'>
            <h3>매칭 날짜를 선택해 주세요</h3>
            <input type="date"/>
          </div>
          <div className='regCost'>
            <h3>해당 경기 참가비를 기재해 주세요</h3>
            <input type="text"/>
            <p>/원</p>
          </div>
          <div className='regFoot'>
          <p>제출하시겠습니까?</p>
          <div className='regCheck'>
            <Link to='/home'><button style={{backgroundColor:'grey', color:'white'}}>아니요</button></Link>
            <button>예</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Registration
