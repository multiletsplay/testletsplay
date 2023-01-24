import React from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 


const SearchDateTime = ({dateToggle, controlToggle}) => {
  function CalenderApp() {
    const [value, onChange] = React.useState(new Date());
  
    return (
      <div>
         {/* <div className="">
             {moment(value).format("YYYY년 MM월 DD일")} 
        </div> */}
        <Calendar 
        onChange={onChange} value={value} 
        formatDay={(locale, date) =>
        date.toLocaleString("en", { day: "numeric" }) }
        minDate={new Date()}
        />
          
      </div>
    );
  }


  return(
    <div className="wrapper-search_type with-layer">
    <button className="btn-clear btn-search_type select select_calendar" onClick={()=>{controlToggle('date')}}>날짜<span className="material-symbols-outlined">arrow_drop_down</span></button> 
    <div className={`layer-search ${dateToggle&&'showDis'}`}>
      <div className="wrap-calendar">
      <h4 className="search-subtitle">날짜 선택</h4>
      <CalenderApp></CalenderApp>
      </div> 

      <div className="wrap-slider">
        <h4 className="search-subtitle">시간 선택</h4> 
          <MultiRangeSlider
          min={0}
          max={24}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        

        <div className="btn-list">
          <button className="btn-clear btn-yellow filter" >초기화</button> 
          <button className="btn-clear btn-green filter" onClick={()=>{controlToggle('date')}}>날짜 적용하기</button>
      </div>
      </div>
    </div> 
      
    </div>

  )



}


export default SearchDateTime;