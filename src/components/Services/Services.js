// import section
import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
  // Destructuring the props.service
  const { id, img, name, shortDetails } = props.service;
  return (
    <Col sm={12} lg={4} md={6}>
      <CardGroup className="h-100">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>{shortDetails}</Card.Text>
          </Card.Body>
          <Card.Footer className="p-0 bg-white border-0">
            <Link to={`/details/${id}`}>
              <Button variant="outline-danger" className="w-100 ">
                Details
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Services;
