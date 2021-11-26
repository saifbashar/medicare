// Import section
import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Doctor = (props) => {
  const { name, degree, position, shortDetails, img } = props.doctors;
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text as="div">
            <p>{degree}</p>
            <p>{position}</p>
            <p>{shortDetails}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
