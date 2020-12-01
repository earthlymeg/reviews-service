import React from 'react';
import StaticStars from './StaticStars.jsx';
import * as moment from 'moment';
import {Container, Row, Col} from 'react-bootstrap';
import Helpful from './Helpful.jsx';



const Review = ({review, reviewHelpful}) => {

   let date = moment.utc(review.date).format('MM/DD/YYYY');


  return (
    <Container style={{marginTop: '45px', marginBottom: '10px', borderBottom: '1px solid black'}}>


        <Row >
          <Col style={{padding: '0px'}}> <StaticStars review={review}/></Col>
          <Col></Col>
          <Col style={{fontSize: '12px', textAlign: 'right'}}> {review.reviewer_name}{' '}{date}</Col>
        </Row>

        <Row style={{marginTop: '10px'}}>
          <p style={{fontWeight: 'bold'}}>{review.summary}</p>
        </Row>

        <Row style={{marginTop: '20px', }}>
          <p>{review.body}</p>
        </Row>


        <Row >
          <Col style={{padding: '0px'}}>
           <Helpful review={review} reviewHelpful={reviewHelpful} />
          </Col>
        </Row>



    </Container>
  )}

export default Review;