import React,{ useRef, useEffect } from 'react'

import { NavLink, Link } from 'react-router-dom';
import './header.css'


import { Container, Row } from "reactstrap"
import { motion } from 'framer-motion'

const nav__links = [
  {
    path:'home',
    display:'홈'
  },
  {
    path:'matching',
    display:'매칭하기'
  },
  {
    path:'facility',
    display:'시설예약'
  },
  {
    path:'lesson',
    display:'레슨예약'
  },
]


const Header = () => {

  const alarmAction = useRef(null)
  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", ()=> {
      if(
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(()=>{
      stickyHeaderFunc();
      return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const ToggleAlarmAction = () => alarmAction.current.classList.toggle('show__alarm');


  return (<header className='header' ref={headerRef}>

      <Container>    
          <Row>
              <div className='nav__wrapper'>

                <div className="logo">
                    <div>
                      <h1>Let's Play</h1>
                    </div>
                </div>

                <div className="navigation">
                  <ul className="menu">
                    {
                    nav__links.map((item, index)=>(
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>
                          {item.display}
                        </NavLink>
                      </li>
                    ))
                    }
                  </ul>
                </div>

                <div className="nav__icons">
                  
                  <motion.span whileTap= {{ scale: 1.2 }}>
                    <Link to='registration'><span className='btn01'>매칭만들기</span></Link>
                  </motion.span>
                  <motion.div whileTap= {{ scale: 1.2 }} className='alarm' onClick={ToggleAlarmAction}>
                    <span  className="fav__icon">
                      <i className='ri-notification-line'></i>
                      <span className="badge">1</span>
                    </span>

                    <div className='alarm__list' ref={alarmAction}>
                        <ul>
                          <Link to='/'>
                          <li>
                            <p>23.01.16</p>
                            <p><b>탁구 매칭구합니다</b>의 매칭이 완료 되었습니다</p>                            
                          </li>
                          </Link>
                          <li>
                            <p>23.01.16</p>
                            <p><b>탁구 매칭구합니다</b>의 매칭이 완료 되었습니다</p>                            
                          </li>                       
                        </ul>                     
                    </div>
                  </motion.div>            
                    
                      <motion.span whileTap= {{ scale: 1.2 }}>
                      <Link to={'/login'}><i className='ri-login-box-line' /> </Link>
                      </motion.span>
                   
                </div>

              </div>
          </Row>
      </Container>
  </header>
    
  
)
}

export default Header
