import React from 'react';
import InputBox from './loginForm/InputBox';
import LoginBtn from './loginForm/loginBtn';
import NaverLogin from './loginForm/NaverLogin';
import KakaoLogin from './loginForm/KakaoLogin';
import { Container, Row} from 'reactstrap'


import '../styles/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container style={{textAlign:'center'}}>
      <Row>
        <div className='mainContent inner'>
        <h2 className="section__title mb-40">Login</h2>
          <InputBox content='아이디' />
          <InputBox content='비밀번호' />
        <div className='mainBtn'>
          <LoginBtn content='로그인' />
        </div>
        <div className='findAccount'>
        <ul>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
        </div>

        <div className='social_media'>
          <h5>SNS로 간편하게 로그인하기</h5>
          <NaverLogin/>
          <KakaoLogin/>
        </div>

        <div className='ask_signup'>
            <span>아직도 랫플 회원이 아니세요?</span>
            <Link to='/signUp'><span className='signup'>회원가입</span></Link>
          </div>
      </div>

     
    </Row>
  </Container>
  );
}

export default Login
