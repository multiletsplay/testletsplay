import React, { useState, useEffect }from "react";
import { Container, Row } from 'reactstrap'

import Search from './Search/search';
import '../styles/layout.css'
import '../styles/boardlist.css'
import MatchingList from '../components/UI/MatchingList';
import Filter from "./Filter/filter";
import sportsButtons from '../assets/data/datacategory'
import MatchingData from '../assets/data/MatchingData';
import { getMatchingData, filterMatchingData } from "./Filter/filtertfun";

const Matching = ({data}) => {

  const [filteredData, setFilteredSportsData] = useState(null);

  
  useEffect(()=>{
    const filteredTrendingProducts = MatchingData.filter(
      (item) => item.category
    );
    setFilteredSportsData(filteredTrendingProducts);
    setFilteredSportsData(getMatchingData());    
  },[]);


  function handleSports(e) {
    let sportsCategory = e.target.value;
    sportsCategory !== "all"
      ? setFilteredSportsData(filterMatchingData(sportsCategory))
      : setFilteredSportsData(getMatchingData());
  }
    

  return (
    <Container>
      <Row>
        <div className='m40'>
          <Filter 
          sportsButtons={sportsButtons}          
          handleSports={handleSports}
          />
          <Search />
        </div>
          <MatchingList 
          data={filteredData}
          />
      </Row>
    </Container>
  );
}

export default Matching
