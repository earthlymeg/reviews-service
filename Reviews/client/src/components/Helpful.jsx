import React, {useState} from 'react';
import Reviews from './Reviews.jsx';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Helpful = ({review}) => {

  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [clicked, setClicked] = useState(0);


//   const addHelpfulness = () => {
//     if (clicked === 0) {
//       console.log(review.helpfulness)
//     axios.put(`http://52.26.193.201:3000/reviews/13/list`, [review.helpfulness + 1])
//     .then((res => {console.log(res)}))
//   }
// }



    return(
    <Container>
      <Row>
        <p style={{fontSize: '12px'}}>Helpful?</p>
       <Button size='sm' variant='link' style={{fontSize: '12px', position: 'relative', top: '-9px'}} onClick={()=> setHelpfulness(review.helpfulness + 1)}> Yes({helpfulness}) </Button>
       <p style={{fontSize: '12px'}}> | </p>
       <Button size='sm' variant='link' style={{fontSize: '12px', position: 'relative', top: '-9px'}}>Report</Button>
      </Row>
    </Container>
  )
}

export default Helpful;