import React from 'react';
import Review from './Review.jsx';
import {Container, Row} from 'react-bootstrap';

const Reviews = ({reviews}) => (

    <Container>
      <Row >
      {reviews.map(review =>
      <Review key={review.review_id} review={review} /> )}
      </Row>
    </Container>
)


export default Reviews;
