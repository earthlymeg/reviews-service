import React from 'react';
import {Row, DropdownButton, Dropdown, Container, Col} from 'react-bootstrap';

const SortReviews = () => {

    return(
    <Container style={{paddingTop: '75px'}}>
    <Row >
      <Col md={3} style={{padding:'0px'}}>
        <p style={{fontSize: '22px'}}> 248 Reviews sorted by</p>
      </Col>
      <Col md={2} style={{padding:'0px'}} >
        <DropdownButton variant='link' id="dropdown-basic-button" title="Relevance">
         <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Most Popular</Dropdown.Item>
       </DropdownButton>
      </Col>
      <Col></Col>
    </Row>
    </Container>
  )
}


export default SortReviews;

