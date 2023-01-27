import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container} from 'reactstrap'
import '../styles/signUp.css'
import { useState } from 'react'


function SignUp() {



  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');
  const [Dpw, setDpw] = useState('');
  const [Name, setName] = useState('');
  const [Nic, setNic] = useState('');
  const [Email, setEmail] = useState('');
  const [Num, setNum] = useState('');
  const [IdValid, setIdValid] = useState(false)
  const [PwValid, setPwValid] = useState(false)
  const [DpwValid, setDpwValid] = useState(false)
  const [NameValid, setNameValid] = useState(false);
  const [NicValid, setNicValid] = useState(false)
  const [EmailValid, setEmailValid] = useState(false)
  const [NumValid, setNumValid] = useState(false)
  const [NotAllow, setNotAllow] = useState(true)



  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-z]+[a-z0-9]{5,19}$/g;
    if(regex.test(Id)){
      setIdValid(true);
    }else{
      setIdValid(false);
    }
  }
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,15}$/;
    if(regex.test(Pw)){
      setPwValid(true);
    }else{
      setPwValid(false);
    }
  }
  const handleDpw = (e) => {
    setDpw(e.target.value);
    if(Dpw === Pw){
      setDpwValid(true);
    }else {
      setDpwValid(false);
    }
  }
  const handleName = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
    if(regex.test(Name)){
      setNameValid(true);
    }else {
      setNameValid(false);
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(regex.test(Email)){
      setEmailValid(true)
    }else {
      setEmailValid(false)
    }
  }
  const handleNum = (e) => {
    setNum(e.target.value);
    const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if(regex.test(Num)){
      setNumValid(true)
    }else {
      setNumValid(false)
    }
  }
  const checkAll = () => {
    let isChecked = document.getElementById('chkAll').checked;
    let chks = document.getElementsByClassName('chk');
    for(let i=0; i<chks.length; i++){
     chks[i].checked = isChecked;
    }
  }
  useEffect(() => {
    if(IdValid && PwValid && NameValid && EmailValid && NumValid){
      setNotAllow(false);
      return;
    }
  setNotAllow(true);
}, [IdValid, PwValid, NameValid, EmailValid, NumValid])




  return (
    <Container>
    <div className='SigningMain inner'>
    <div className='Signing'>
        <div><h1>회원가입</h1></div>
        <span style={{color:'red'}}>*필수입력사항</span>
        <hr/>
        <div className='formBoxTop'>
        <div className='formBox'>
        <div className='ValTarget idCheck'>
          <div>
          <span>아이디</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='아이디를 입력해주세요'
          value={Id}
          onChange={handleId}/>
          <button type='submit'>중복확인</button>
        </div>
        <div className='Validate VID'>
        {!IdValid && Id.length > 0 && (
            <div>※아이디를 확인해주세요</div>
            )}
        </div>
        <div className='ValTarget pwCheck'>
          <div>
          <span>비밀번호</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='비밀번호를 입력해주세요'
          value={Pw}
          onChange={handlePw}/>
        </div>
        <div className='Validate VPW'>
        {!PwValid && Pw.length > 0 && (
            <div>※비밀번호가 형식에 맞지 않습니다</div>
            )}
        </div>
        <div className='ValTarget pwDCheck'>
        <div>
          <span>비밀번호확인</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='비밀번호를 한번 더 입력해주세요'
          value={Dpw}
          onChange={handleDpw}/>
        </div>
        <div className='Validate VDPW'>
        {!PwValid && Pw.length > 0 && (
            <div>※비밀번호를 확인해주세요</div>
            )}
        </div>
        <div className='ValTarget nameCheck'>
        <div>
          <span>이름</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='이름을 입력해주세요'
          value={Name}
          onChange={handleName}/>
        </div>
        <div className='Validate VNAME'>
        {!NameValid && Name.length > 0 && (
          <div>※이름을 다시 확인해주세요</div>
        )}
        </div>
        <div className='ValTarget nicCheck'>
          <div>
          <span>닉네임</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='닉네임을 입력해주세요'
          value='닉네임를 입력'/>
        </div>
        <div className='ValTarget emailCheck'>
          <div>
          <span>이메일</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='ex) multi_7@campus.com'
          value={Email}
          onChange={handleEmail}/>
        </div>
        <div className='Validate VEMAIL'>
        {!EmailValid && Email.length > 0 && (
            <div>※이메일을 다시 확인해주세요</div>
            )}
            </div>
        <div className='ValTarget numCheck'>
          <div>
          <span>휴대폰</span>
          <span className='redColour'>*</span>
          </div>
          <input
          type="text"
          placeholder='숫자만 입력해주세요'
          value={Num}
          onChange={handleNum}/>
          <button type='submit'>인증받기</button>
        </div>
        <div className='Validate VNUM'>
        {!NumValid && Num.length > 0 && (
            <div>※휴대폰 번호를 확인해주세요</div>
            )}
            </div>
        <div className='ValTarget numDCheck'>
          <input
          type="text"
          value='휴대폰를 입력'/>
          <button type='submit'>인증확인</button>
        </div>
        <div className='formBtn'>
          <button>남자</button>
          <button>여자</button>
        </div>
        <div className='formDate'>
          <div>생년월일</div>
        <div className='formDate'>
          <input type="date" style={{paddingLeft:'80px'}}/>
        </div>
        </div>
        </div>
        </div>
        <hr style={{marginTop:'25px', marginBottom:'10px'}}/>
          <div className='agreementTitle'>
            <span className='agreementAsk'>이용약관동의</span>
            <span className='redColour'>*</span>
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
            <button disabled={NotAllow} style={{width:'350px'}}>가입하기</button>
          <div className='signUpLink'>
            <span>
             이미 가입하셨나요? &nbsp;
            </span>
            <Link to="/login">로그인하기</Link>
          </div>
          </div>
        </div>
    </div>
    </div>
    </Container>
  )
}
export default SignUp