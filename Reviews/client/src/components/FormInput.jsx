
import React from 'react';
import AddReviewButton from './AddReviewButton.jsx';
import {Container, Form} from 'react-bootstrap';

class FormInput  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedReview: {
        name: '',
        rating: null,
        summary: '',
        body: ''
      }
    }
        //Add Reviews
        // this.addName = this.addName.bind(this);
        // this.addRating = this.addRating.bind(this);
        // this.addSummary = this.addSummary.bind(this);
        // this.addBody = this.addBody.bind(this);
        this.addReview = this.addReview.bind(this);
        // this.handleChange = this.handleChange.bind(this);
  }


  //Add a Review - POST
addReview(review) {

  let addedReview = {
    name: this.state.addedReview.name,
    rating: this.state.addedReview.rating,
    summary: this.state.addedReview.summary,
    body: this.state.addedReview.body
  }
  console.log(addedReview);
  axios.post(`http://52.26.193.201:3000/reviews/13/list`, addedReview )
  .then(axios.get(`http://52.26.193.201:3000/reviews/13/list`))
  .then(res =>  res.data.results)
  .then(reviewsData => this.setState({reviews: reviewsData}))
  .catch(err => err)
}



render() {
  return(

    <Container>
<Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name='name'
            placeholder="Your Name Here"
            onChange={(event) => this.setState({addedReview:{name: event.target.value}})}
          />
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            required
            as="select"
            onSelect={(event) => this.setState({addedReview:{rating: event.target.value}})}
          >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formSummary">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Title Here"
            name='summary'
            onChange={(event) => this.setState({addedReview:{summary: event.target.value}})}
            />
        </Form.Group>
        <Form.Group controlId="formBody">
          <Form.Label>Write Review Here</Form.Label>
          <Form.Control
            required
            as="textarea"
            type='text'
            placeholder="Write Review Here"
            rows={5}
            name='body'
            onChange={(event) => this.setState({addedReview:{body: event.target.value}})}
            />
        </Form.Group>
     </Form>
    </Container>

  )
}

}

export default FormInput;