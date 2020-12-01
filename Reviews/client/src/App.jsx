import React from "react";
import Reviews from './components/Reviews.jsx';
import OverallRating from './components/OverallRating.jsx';
import SortReviews from './components/SortReviews.jsx';
import AddReviewButton from './components/AddReviewButton.jsx';
import { FaStar } from 'react-icons/fa';
import DynamicStars from './components/DynamicStars.jsx';
import StaticStars from './components/StaticStars.jsx';
import AttributeSlider from './components/AttributeSlider.jsx';
import axios from 'axios';

//BootStrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container, ProgressBar, Accordion, Card, Button} from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      product: 1,
      reviews : [{
        body: '',
        date: '',
        helpfulness: '',
        photos: [],
        rating: '',
        recommend: '',
        response: null,
        review_id: '',
        reviewer_name: '',
        summary: ''
      }],
      open: false

    }
    //Get Reviews
    this.getReviews = this.getReviews.bind(this);

  }


  componentDidMount () {
    this.getReviews();
  }

  //get reviews
  getReviews() {
    axios.get(`http://52.26.193.201:3000/reviews/${this.state.product}/list`)
    .then(res => res.data.results)
    .then(reviewsData => this.setState({reviews: reviewsData}))
    .catch(err => err);
  }




  render() {

    return (
    <>
      <Container fluid>

        <Row>
          <Col md={4}>
            <OverallRating />

                <Container style={{paddingLeft: '20px'}}>
                  <Row >
                    <Col md={3} >
                      <p style={{textDecorationLine: 'underline'}}>5 stars </p>
                    </Col>
                    <Col md={8}>
                    <ProgressBar now={40} />
                    </Col>
                  </Row>
                </Container>

                <Container style={{paddingLeft: '20px'}}>
                  <Row >
                    <Col md={3} >
                      <p style={{textDecorationLine: 'underline'}}>4 stars </p>
                    </Col>
                    <Col md={8}>
                    <ProgressBar now={70} />
                    </Col>
                  </Row>
                </Container>

                <Container style={{paddingLeft: '20px'}}>
                  <Row >
                    <Col md={3} >
                      <p style={{textDecorationLine: 'underline'}}>3 stars </p>
                    </Col>
                    <Col md={8}>
                    <ProgressBar now={90} />
                    </Col>
                  </Row>
                </Container>

                <Container style={{paddingLeft: '20px'}}>
                  <Row >
                    <Col md={3} >
                      <p style={{textDecorationLine: 'underline'}}>2 stars </p>
                    </Col>
                    <Col md={8}>
                    <ProgressBar now={30} />
                    </Col>
                  </Row>
                </Container>

                <Container style={{paddingLeft: '20px'}}>
                  <Row >
                    <Col md={3} >
                      <p style={{textDecorationLine: 'underline'}}>1 star </p>
                    </Col>
                    <Col md={8}>
                    <ProgressBar now={10} />
                    </Col>
                  </Row>
                </Container>

                  <AttributeSlider />
          </Col>



          <Col md={8}>
            <SortReviews />

            <Accordion>
              <Card style={{border: 'none'}} >
                <Card.Body>
                  <Reviews
                    reviews={this.state.reviews.slice(0,2)}
                    reviewHelpful={this.reviewHelpful}
                  />
                </Card.Body>

                  <Accordion.Collapse eventKey="1">
                    <Col md={12}>
                    <Reviews
                      reviews={this.state.reviews.slice(2)}
                      reviewHelpful={this.reviewHelpful}
                    />
                    </Col>
                  </Accordion.Collapse>


                  {/* <Row style={{paddingBottom: '20px'}}> */}
                    <Col md={12} style={{display: 'inline', textAlign: 'right'}}>
                      <AddReviewButton
                        addReview={this.props.addReview}
                      />
                      {' '}
                      <Accordion.Toggle as={Button} variant="warning" eventKey="1" onClick={() => {this.setState({open: !this.state.open})}}>
                        {!this.state.open ? 'More Reviews +' : 'Less Reviews -'}
                      </Accordion.Toggle>
                     </Col>
                  {/* </Row> */}

              </Card>
            </Accordion>

          </Col>
         </Row>
      </Container>
    </>
    );
  }
}

export default App;
