import React from 'react';
import {Form, Container, Row, Col} from 'react-bootstrap';
const AttributeSlider = () => {

    return(
<Container>
  <Row style={{paddingLeft: '35px'}}>
      <Form>
        <Form.Group controlId="formBasicRangeCustom">
          <Row>
        <Form.Label>Size</Form.Label>
        <Form.Control type="range" custom />
         </Row>
         <Row md={3}>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>Too Small</Form.Label>
          </Col>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>Perfect</Form.Label>
          </Col>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>Too Large</Form.Label>
          </Col>
          </Row>
            </Form.Group>
      </Form>
  </Row>


  <Row style={{paddingLeft: '35px'}}>
      <Form>
        <Form.Group controlId="formBasicRangeCustom">
          <Row>
        <Form.Label>Comfort</Form.Label>
        <Form.Control type="range" custom />
         </Row>
         <Row md={3}>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>No Comfort</Form.Label>
          </Col>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>Okay</Form.Label>
          </Col>
          <Col>
            <Form.Label className="p-2 flex-fill" style={{fontSize: '12px'}}>Just Right</Form.Label>
          </Col>
          </Row>
            </Form.Group>
      </Form>
  </Row>





</Container>
  )
}

export default AttributeSlider;