import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Comment(){
  return (
  <div>
    <Form action="" method="POST" >
      <Row>
        <Col className="col-md-2">
        <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
          <Form.Control placeholder="UserName" />
        </FloatingLabel>
        </Col>
        <Col className="col-md-7">
        <FloatingLabel controlId="floatingInput" label="Comment">
          <Form.Control placeholder="Comment" />
        </FloatingLabel>
        </Col>
        <Col className='col-md-1'>
          <input type="submit" className="btn btn-primary" value="Add Comment"/>
        </Col>
      </Row>
    </Form>
  </div>
  )
}

export default Comment 