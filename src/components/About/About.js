import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div className="">
      <Row className="container-fluid mx-auto">
        <Col sm="12" lg="6" md="6">
          <Image
            className="img-fluid"
            src="https://www.hopkinsmedicine.org/sebin/p/e/inclusion-hands-in-compressed.jpg"
          ></Image>
        </Col>
        <Col className="d-flex align-items-center" sm="12" lg="6" md="6">
          <div className="w-75 mx-auto">
            <h2>
              About <span className="green">Medicare Hospital Medicine</span>
            </h2>
            <p>
              Together, we will deliver the promise of medicine. The mission of
              The Medicare Hospital Medicine is to improve the health of the
              community and the world by setting the standard of excellence in
              medical education, research and clinical care.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5 container mx-auto">
        <h2 className="text-center fw-bold my-5 ">
          Mission, Vision and Values
        </h2>
        <Col className="text-center">
          <h4 className="text-center">
            Our <span className="green">Mission</span>
          </h4>

          <p>
            To improve the health of our community and the world by setting the
            standard of excellence in patient care.
          </p>
        </Col>
        <Col className="text-center">
          <h4>
            Our <span className="green">Vision</span>
          </h4>

          <p>
            To lead the world in the diagnosis and treatment of disease and to
            train tomorrow’s great physicians, nurses and scientists.
          </p>
        </Col>
        <Col className="text-center">
          <h4>
            Our <span className="green">Values</span>
          </h4>
          <p>
            Excellence & Discovery Leadership & Integrity Diversity & Inclusion
            ​​​​​​​Respect & Collegiality
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
