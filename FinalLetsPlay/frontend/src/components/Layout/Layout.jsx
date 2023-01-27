import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import SignUp from '../../pages/Signup'


const Layout = () => {


  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <SignUp />
  // }


  

  return (
   <>
    <Header />
      <div>
        <Routers />
      </div>
    <Footer />
   </>
  )
}

export default Layout
