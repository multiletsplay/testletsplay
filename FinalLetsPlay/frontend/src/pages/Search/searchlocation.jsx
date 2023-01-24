import React,{useState} from 'react'

const SearchLocation = ({regionToggle, controlToggle}) => {
  const [parsedValue, setParsedValue] = useState("");


  return(
    <div className="wrapper-search_type with-layer">
    <button className="btn-clear btn-search_type select location" onClick={()=>{
        controlToggle('region')
    }}>지역<span className="material-symbols-outlined">arrow_drop_down</span></button> 
    <div className={`layer-search  ${regionToggle&&'showDis'}`}>
        <div className="wrap-input">
          
          <div className="wrap-input">
            <button className="btn-clear btn-search" ></button>
            <span className="material-symbols-outlined search-icon">search</span>
            <input type="text" placeholder="지역명 검색해보세요." onChange={(e)=>{
              console.log(e)
              setParsedValue(e.target.value);
            }}/>
            <button className="btn-clear">검색</button>
          </div>

          <div className="wrap-button">
            <button className="btn-clear btn-nearby">지금 내 주변에서 찾기</button>
          </div> 

        </div> 
    </div>
  </div>
  )

}

export default SearchLocation;