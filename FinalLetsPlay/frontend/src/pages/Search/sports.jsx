import React, { useState, useEffect } from "react";
import { sportsButtons } from "./datacategory";
import { getSportsData, filterSportsData } from "../../services/services";
import Matching from './matching';

import "../../styles/layout.css"
import "../../styles/boardlist.css"




export default function Sports({ControlMenu}) {
  const [filteredData, setFilteredSportsData] = useState(null);
  useEffect(() => {
    setFilteredSportsData(getSportsData());
  }, []);

  function handleSports(e) {
    let sportsCategory = e.target.value;
    sportsCategory !== "all"
      ? setFilteredSportsData(filterSportsData(sportsCategory))
      : setFilteredSportsData(getSportsData());
  }



  return (
    
    <>
    <div className="m0a sport-div">
      {sportsButtons &&
        sportsButtons.map((type, index) => (
          <>
            <button className="sport" key={index} value={type.value} onClick={handleSports}>
              {type.name}
            </button>
          </>
        ))}
    </div>

      <div className='match-list-div'>
      {filteredData &&
        filteredData.map(type => (
          

            <>
          <Matching 
          category={type.category} 
          title={type.title} 
          deadline={type.deadline} 
          people={type.people} 
          location={type.location} 
          date={type.date} 
          time={type.time} />

          </>
          
          
        ))}
      </div>
    </>
  );
}

