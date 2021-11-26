import { React, useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();
  // console.log(serviceId);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saifbashar/web-dev/main/services.JSON'
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  // timeout(10000);
  const search = services?.find((details) => details.id === serviceId);
  // const { img, shortDetails, name } = search;
  // console.log(search);
  return (
    <div className="container my-5">
      <Row className="g-2">
        <Col sm={12} md={6} lg={6}>
          <Image src={search?.img} className="img-fluid "></Image>
        </Col>
        <Col sm={12} md={6} lg={6} className="d-flex align-items-center">
          <div>
            {' '}
            <h1 className=" fw-bold green">{search?.name}</h1>
            <p>{search?.shortDetails}</p>
          </div>
        </Col>
      </Row>
      {/* <CardGroup className="w-50 mx-auto">
        <Card>
          <Card.Img variant="top" src={search?.img} />
          <Card.Body>
            <Card.Title className="text-center fw-bold green">
              {search?.name}
            </Card.Title>
            <Card.Text className="">{search?.shortDetails}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
    </div>
  );
};

export default Details;
