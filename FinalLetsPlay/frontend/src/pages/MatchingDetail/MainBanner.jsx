import React from 'react'

function MainBanner() {
  return (
    <div>
        <div className="check-display">시설확정</div>
        <h3 style={{marginBottom: '10px'}}>시설명 영역</h3>
        <div style={{marginBottom: '3px'}}>경기도 부천시 어쩌구 주소</div>
        <div style={{marginBottom: '15px'}}>길찾기 &gt;</div>
        <div style={{fontSize: 'small'}}>날짜</div>
        <h3 style={{marginBottom: '15px'}}>2022.12.30(수)</h3>
        <div style={{fontSize: 'small', marginBottom: '7px'}}>시간</div>
        <button style={{borderRadius: '10%', borderStyle:'none', backgroundColor: 'gold', marginBottom: '17px', padding:'5px 8px'}}>11:30</button>
        <div><button className="join-btn">참여하기</button></div>
    </div>
  )
}

export default MainBanner
