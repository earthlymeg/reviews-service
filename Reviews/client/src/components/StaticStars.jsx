import React, { useState} from 'react';
import { FaStar } from 'react-icons/fa';
import {Container} from 'react-bootstrap';

const StaticStars = ({review}) => {
  let rating = review.rating;
    return(
      <Container style={{padding: '0px'}}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
        return (


          <FaStar
            className='star'
            color={ratingValue <= rating  ? '#ffc107' : '#e4e5e9'}
            size={14}
            value='ratingValue'
            key={index}
          />

        )})}





      </Container>
    )
}

export default StaticStars;