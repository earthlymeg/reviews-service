import React from 'react';
import StaticStars from './StaticStars.jsx';
import {Container, Col, Row} from 'react-bootstrap';
import {FaStar, FaStarHalf} from 'react-icons/fa';

const OverallRating = () => {


    return(
      <Container style={{paddingTop: '5px', paddingLeft: '10px'}}>
      <Row style={{paddingLeft: '10px'}}>
      <p style={{fontSize: '24px'}}>Ratings & Reviews</p>
      </Row>
      <Row style={{paddingLeft: '10px'}}>
      <Col md={5}><div style={{fontSize: '60px', fontWeight: 'bold'}}>3.5</div></Col>
      <Col md={7} style={{position: 'relative', top:'30px'}}>
      <FaStar className='star' color={'#ffc107'}size={30}/>
      <FaStar className='star' color={'#ffc107'}size={30}/>
      <FaStar className='star' color={'#ffc107'}size={30}/>
      <FaStarHalf className='star' color={'#ffc107'}size={30}/></Col>
      </Row>
      <br />
      <Row style={{paddingLeft: '20px'}}>
      <p style={{fontSize: '18px'}}>100% of reviews recommend this product</p>
      </Row>
      </Container>
  )
}


export default OverallRating;