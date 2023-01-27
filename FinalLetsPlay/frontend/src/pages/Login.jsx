import React,{useState} from 'react';
import InputBox from './loginForm/InputBox';
import LoginBtn from './loginForm/loginBtn';
import NaverLogin from './loginForm/NaverLogin';
import KakaoLogin from './loginForm/KakaoLogin';
import { Container, Row} from 'reactstrap'

import '../styles/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  // const [inputId, setInputId] = useState("");
  // const [inputPw, setInputPw] = useState("");
  
  // const handleInputId = (e) => {
  //   setInputId(e.target.value);
  // };

  // const handleInputPw = (e) => {
  //   setInputPw(e.target.value);
  // };

  // function onClickLogin (){
  //     fetch("/member/login",{
  //     method : "POST",
  //       body : JSON.stringify({
  //             id : inputId,
  //             password : inputPw
  //           })
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //       if (res.data.email === undefined) {
  //         // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
  //         console.log("======================", res.data.msg);
  //         alert("입력하신 id 가 일치하지 않습니다.");
  //       } else if (res.data.id === null) {
  //         // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
  //         console.log(
  //           "======================",
  //           "입력하신 비밀번호 가 일치하지 않습니다."
  //         );
  //         alert("입력하신 비밀번호 가 일치하지 않습니다.");
  //       } else if (res.data.id === inputId) {
  //         // id, pw 모두 일치 userId = userId1, msg = undefined
  //         console.log("======================", "로그인 성공");
  //         sessionStorage.setItem("id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
  //         sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
  //       }
  //       // 작업 완료 되면 페이지 이동(새로고침)
  //       document.location.href = "/";
  //     })
  //   }
  


  const setLoginData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  const signin = () => {
    const { id, password } = this.state;
    if (id && password) {
      fetch('/member/login', {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          password: password, //id,password는 백엔드랑 약속 한 부분
        }),
      })
        .then((res) => res.json()) //(1)첫번째 then에서 server에서 보내준 response를 object 형태로 변환한다.
        .then((res) => { //(2)두번째 then에서는 object로 변환한 response를 확인한다.
          if (res) { //(3)로그인이 성공하면 백엔드에서 토큰을 준다.
            localStorage.setItem('id', id); //(4)`token`과 `user_name`을 로컬 스토리지에 저장한다.
            localStorage.setItem('name', res.data.name);
            this.props.history.push('/');
          } else {
            alert('ID , pasword를 확인해 주세요');
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert('아이뒤 비밀번호를 입력해 주세요');
    }
  };

  return (
    <Container style={{textAlign:'center'}}>
      <Row>
        <div className='mainContent inner'>
        <h2 className="section__title mb-40">Login</h2>

        <form >

            <InputBox content='아이디'  
                id="id"
                name="id"
                label="id"
                type="text"
                onChange={setLoginData}
                />

            <InputBox content='비밀번호'  
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={setLoginData}
                />

            <div className='mainBtn'>
              <LoginBtn 
                  content='로그인'
                  type="submit"
                  variant="contained"
                  color="primary" 
                  onClick={signin}
                  />
            </div>

        </form>

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
