import React from 'react'
import { Link } from 'react-router-dom'

function WriteArticle() {
  return (
    <div className='InqueryWrapper'>
      <div className='InqueryMain'>
        <div className='Inquery'>
            <h1>1:1 문의</h1>
        </div>
        <div className='InqueryKind'>
            <h4>문의내용</h4>
            <span>*필수입력</span>
        </div>
        <div className='MainArea'>

        <div className='InquerySort'>
        <div className='InqueryName'>
            <label>유형</label>
            <span className='MarkStar'>*</span>
        </div>
        <div className='InqueryBlank'>
          <select name="" id="">
            <option >유형 선택</option>
            <option >결제</option>
            <option >예약</option>
            <option >기타</option>
          </select>
        </div>
        </div>

        <div className='InqueryTitle'>
        <div className='InqueryName'>
            <label>제목</label>
            <span className='MarkStar'>*</span>
        </div>
        <div className='InqueryBlank'>
          <input type="text" placeholder='제목을 입력해주세요'/>
        </div>
        </div>

        <div className='InqueryTitle'>
        <div className='InqueryName'>
            <label>내용</label>
            <span className='MarkStar'>*</span>
        </div>
        <div className='InqueryBlank BlankContent'>
          <input type="text" placeholder='문의하실 내용을 입력해주세요'/>
        </div>
        </div>
        <div className='InqueryKind KindCustom'>
            <h4>고객 정보</h4>
            <span>*필수입력</span>
        </div>

        <div className='CustomWrapper'>
            <div className='InqueryTitle TitleCustom'>
            <div className='InqueryName NameCustom'>
                <label>성명</label>
                <span className='MarkStar'>*</span>
            </div>
            <div className='BlankCustom'>
            <input type="text" value='랫플'/>
            </div>
            </div>

            <div className='InqueryTitle TitleCustom'>
            <div className='InqueryName NameCustom'>
                <label>연락처</label>
                <span className='MarkStar'>*</span>
            </div>
            <div className='PhoneCustom'>
            <select  className='PhoneCustomFirst' name="" id="">
                <option >선택</option>
                <option >010</option>
                <option >011</option>
                <option >016</option>
                <option >017</option>
                <option >018</option>
                <option >019</option>
            </select>
            <input className='PhoneCustomNum' type="text" value='9060'/>
            <input className='PhoneCustomNum' type="text" value='5190'/>
            </div>
            </div>

            <div className='InqueryTitle TitleCustom'>
            <div className='InqueryName NameCustom'>
                <label>이메일</label>
                <span className='MarkStar'>*</span>
            </div>
            <div className='BlankCustom'>
            <input type="text" value='Multi_final@gmail.com'/>
            </div>
            </div>
            <div style={{border:'none'}} className='InqueryKind KindCustom'>
            <h4>개인정보 수집에 대한 동의</h4>
            <span style={{color:'#666666', fontSize:'smaller'}}>문의를 통해 아래의 개인정보를 수집합니다. 수집된 개인정보는 문의 외 목적으로 사용하지 않습니다.</span>
        </div>
        <div className='AgreementContainer'>
            <div className='AgreementBox'>
               개인정보의 수집목적 및 항목<br/>
                ① 수집 목적 : 원활한 고객 상담, 불편사항 및 문의사항 관련 의사소통 경로 확보<br/>
                ② 수집 항목<br/>
                *필수입력사항<br/>
                - 이용자 식별을 위한 항목 : 성명, 연락처, 이메일, 아이디(로그인 시 수집)<br/>
                <span class="color_red"><br/>
                개인정보의 보유 및 이용기간<br/>
                입력하신 개인정보는 소비자 보호에 관한 법률 등 관계 법률에 의해 다음과 같이 보유합니다.<br/>
                보유기간 : 문의접수 후 처리 완료시점으로 부터 3년</span><br/><br/>
                ※ 1:1문의 서비스 제공을 위한 최소한의 개인정보이며 거부할 수 있습니다. 다만, 수집에 동의하지 않을 경우 서비스 이용이 제한됩니다.
            </div>
        </div>
        <div className='RadioCustom'>
            <div>
                <input id='agree' type="radio" name='agree'/>&nbsp;
                <label htmlFor="agree">동의</label>
            </div>
            <div>
                <input id='agree2' type="radio" name='agree'/>&nbsp;
                <label htmlFor="agree2">동의하지않음</label>
            </div>
        </div>
        <div className='ConfirmCustom'>
            <Link to='/personal'><div className='ConfirmCustomCancel'><button>취소</button></div></Link>
            <Link to=''><div className='ConfirmCustomOkay'><button>확인</button></div></Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle
