import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import './service.css'

import serviceData from '../assets/data/serviceData';

const Services = () => {
  return <div className="services">
    <Container>
      <Row>

        {
          serviceData.map((item,index)=>(
            <Col lg='4' md='3' key={index}>
              <Link to={`/${item.link}`}>
                <motion.div whileHover={{scale:1.1}} className="service__item" style={{background:`${item.bg}`}}>
                  <span><i className={item.icon}></i></span>
                  <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            </Col>
          ))
        }
        
      </Row>

    </Container>
  </div>
}

export default Services
