import React from 'react'

import InputForm from './signForm/inputForm'
import PwForm from './signForm/pwForm'
import EmailForm from './signForm/emailForm'
import { Link } from 'react-router-dom'
import { Container} from 'reactstrap'

import '../styles/signUp.css'

function SignUp() {

  const checkAll = () => {
    let isChecked = document.getElementById('chkAll').checked;
    let chks = document.getElementsByClassName('chk');
    for(let i=0; i<chks.length; i++){
     chks[i].checked = isChecked;
    }
  }

  return (
    <Container>
    <div className='SigningMain inner'>
    <div className='Signing'>
        <div><h1>회원가입</h1></div>
        <span>*필수입력사항</span>
        <hr/>
        <form className='formBoxTop'>
        <div className='formBox'>
        <InputForm title='아이디*' place='아이디를 입력해주세요'/>
        <PwForm title='비밀번호*' place='영문,숫자,특수문자포함 8자 이상 15자 이하'/>
        <PwForm title='비밀번호확인*' place='비밀번호를 한번 더 입력해주세요'/>
        <InputForm title='이름*' place='이름을 입력해주세요'/>
        <InputForm title='닉네임*' place='닉네임을 입력해주세요'/>
        <EmailForm title='이메일*' place='ex) multi_7@campus.com'/>
        <InputForm title='휴대폰*' place='숫자만 입력해주세요'/>
        </div>
        <div className='formBtn'>
          <button>남자</button>
          <button>여자</button>
        </div>
        <div className='formDate'>
          <div>생년월일</div>
        <div className='formDate'>
          <input type="date" />
        </div>
        </div>
        <hr style={{marginTop:'25px', marginBottom:'10px'}}/>
          <div className='agreementTitle'>
            <span className='agreementAsk'>이용약관동의*</span>
            <label><span><input id='chkAll' type={'checkbox'} onClick={checkAll}></input></span>
            <span style={{fontSize:'larger', fontWeight:'bold'}}>전체 동의합니다.</span></label>
          </div>
        <div className='agreement'>
          <div>
            <label><span><input className='chk' type={'checkbox'}></input></span>
            <span>이용약관 동의(필수)</span></label>
          </div>
          <div>
          <label><span><input className='chk' type={'checkbox'}></input></span>
            <span>개인정보 수집•이용 동의(필수)</span></label>
          </div>
          <div>
          <label><span><input className='chk' type={'checkbox'}></input></span>
            <span>할인 쿠폰 등 혜택/정보 수신 동의(선택)</span></label>
          </div>
          <div>
          <label><span><input className='chk' type={'checkbox'}></input></span>
            <span>만 14세 이상입니다.(필수)</span></label>
          </div>
          <div className='signUpBtn'>
            <button style={{width:'350px'}}>가입하기</button>
          <div className='signUpLink'>
            <span>
             이미 가입하셨나요? &nbsp;
            </span>
            <Link to="/login">로그인하기</Link>
          </div>
          </div>

        </div>
        </form>
    </div>
    </div>
    </Container>
  )
}

export default SignUp
