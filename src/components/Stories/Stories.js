// Import Section
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Stories.css';
const Stories = () => {
  return (
    <div className="container">
      <h1 className="fw-bold text-center">
        Featured <span className="green">Stories</span>
      </h1>
      <hr className=" yellow p-1 rounded  mx-auto " />
      <Row className="mx-auto g-3">
        <Col sm={12} md={6} lg={4}>
          <Card className="h-100 border-danger ">
            <Card.Img
              variant="top"
              src="https://www.hopkinsmedicine.org/_includes/_images/back-to-school-father-son.jpg"
            />
            <Card.Body>
              <Card.Title>Back to School 2021</Card.Title>
              <Card.Text>
                Uncertainty about risks and rules can complicate kids’ return to
                classroom learning. A pediatric psychologist offers insight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="h-100 border-danger">
            <Card.Img
              variant="top"
              src="https://www.hopkinsmedicine.org/_includes/_images/booster-shot.jpg"
            />
            <Card.Body>
              <Card.Title>
                Booster Shots and Third Doses for COVID-19 Vaccines
              </Card.Title>
              <Card.Text>
                Two experts answer common questions about third vaccine doses
                and COVID boosters.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="h-100 border-danger">
            <Card.Img
              variant="top"
              src="https://www.hopkinsmedicine.org/_includes/_images/family-safety.jpg"
            />
            <Card.Body>
              <Card.Title>Safety Tips for Families</Card.Title>
              <Card.Text>
                As the pandemic evolves, some of the guidelines for masking and
                physical distancing are changing too. Get advice to help parents
                and families navigate COVID-19 safety precautions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Stories;
