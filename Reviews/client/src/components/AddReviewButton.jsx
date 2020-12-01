import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormInput from './FormInput.jsx';



const AddReviewButton = ({addReview}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const setName = (event) => setName(event.target.value)

    return(
    <div style={{display: 'inline-block'}}>
     <>
      <Button variant="warning" onClick={handleShow}>
        Add Review
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Add A Review</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <FormInput />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" onSubmit={addReview}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>
  )
}

export default AddReviewButton;




