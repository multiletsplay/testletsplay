import React, { useState } from "react";
import { motion } from "framer-motion";
import '../../styles/layout.css'

const Favorite = () => {
  const [isFill, setIsFill] = useState(false);

  const handleClick = event => {
    setIsFill(current => !current);
  };

    return(
    <motion.div whileTap={{scale:1.1}} className="favorite" onClick={handleClick}>
      <i className={`ri-heart-${isFill? 'fill' : 'line'}`}></i>
    </motion.div>
    );
}

export default Favorite