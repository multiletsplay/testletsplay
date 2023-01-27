import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '../pages/Home'
import Matching from '../pages/Matching'
import Facility from '../pages/Facility'
import FacilityDetails from '../pages/FacilityDetails';
import Lesson from '../pages/Lesson'
import LessonDetails from '../pages/LessonDetails';
import MatchingDetails from '../pages/MatchingDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignUp from '../pages/Signup'
import Help from '../pages/help';
import Notice from '../pages/Notice';
import Personal from '../pages/Personal';
import Mypage from '../pages/mypage';
import AskBoard from '../components/UI/AskBoard';
import WriteArticle from '../components/UI/WriteArticle';
import Registration from '../pages/Registration';
import PrivateAsk from '../components/UI/PrivateAsk';

const Routers = () => {


  return  (
  <Routes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path='home' element={<Home/>} />
    <Route path='matching' element={<Matching/>} />
    <Route path='matching/:id' element={<MatchingDetails/>} />
    <Route path='facility' element={<Facility/>} />
    <Route path='facility/:id' element={<FacilityDetails/>} />
    <Route path='lesson' element={<Lesson />} />
    <Route path='lesson/:id' element={<LessonDetails />} />    
    <Route path='checkout' element={<Checkout/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<SignUp/>} />
    <Route path='help' element={<Help/>}/>
    <Route path='notice' element={<Notice/>}/>
    <Route path='personal' element={<Personal/>}/>
    <Route path='mypage' element={<Mypage/>} />
    <Route path='askboard/:noticeSeq' element={<AskBoard/>}/>
    <Route path='writearticle' element={<WriteArticle/>}/>
    <Route path='registration' element={<Registration/>}/>
    <Route path='privateask' element={<PrivateAsk/>}/>
  </Routes>
  );

}

export default Routers;