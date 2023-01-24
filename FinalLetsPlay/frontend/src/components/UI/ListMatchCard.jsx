import '../../styles/layout.css'
import Favorite from "./favorite";
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom'

const ListMatchCard = ({item}) => {
  return(

      <motion.li whileTap={{scale:0.99}}>
        <span className="sports-category">{item.category}</span>
        <Link to={`/matching/${item.id}`}><p>{item.title}</p></Link>
        <div className='mr-30'>
          <span className="match-location">{item.location}</span>        
          <span className="match-location">{item.locationname}</span>
          <span className="deadline">마감{item.deadline}일</span>
          <span className="num-people">{item.people}명</span>
        </div>
        <Favorite/>
      </motion.li>

  )
}

export default ListMatchCard
