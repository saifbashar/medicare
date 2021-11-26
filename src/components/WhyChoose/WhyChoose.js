// Import Section
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const WhyChoose = () => {
  return (
    <div className="my-4 container">
      <h1 className="text-center fw-bold my-4">
        Why Choose <span className="green">Medicare?</span>
      </h1>
      <Row className="g-3">
        <Col>
          <Card className="h-100 p-3">
            <Card.Img
              className="w-25 h-25 mx-auto"
              variant="top"
              src="https://www.mayoclinic.org/~/media/046929DCF60245F9BEAA6987B620668D.svg"
            />
            <Card.Body>
              <Card.Title>More experience</Card.Title>
              <Card.Text>
                Every year, more than a million people come to Mayo Clinic for
                care. Our highly specialized experts are deeply experienced in
                treating rare and complex conditions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 p-3">
            <Card.Img
              className="w-25 h-25 mx-auto"
              variant="top"
              src="https://www.mayoclinic.org/~/media/5921CF3446F9439891548838D6916108.svg"
            />
            <Card.Body>
              <Card.Title>The right answers</Card.Title>
              <Card.Text>
                Successful treatment starts with an accurate diagnosis, and our
                experts take the time to get it right. A team of specialists
                will listen to your needs and evaluate your condition from every
                angle to make the very best plan for you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 p-3">
            <Card.Img
              className="w-25 h-25 mx-auto"
              variant="top"
              src="https://www.mayoclinic.org/~/media/830E62C7F03F415C8538D7EE70E14EB5.svg"
            />
            <Card.Body>
              <Card.Title>Seamless care</Card.Title>
              <Card.Text>
                At Mayo Clinic, every aspect of your care is coordinated and
                teams of experts work together to provide exactly the care you
                need. What might take months elsewhere can often be done in days
                here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 p-3">
            <Card.Img
              variant="top"
              className="w-25 h-25 mx-auto"
              src="https://www.mayoclinic.org/~/media/BE7C4296F4C6413397AF1365CC58F4D5.svg"
            />
            <Card.Body>
              <Card.Title>Unparalleled expertise</Card.Title>
              <Card.Text>
                Mayo Clinic experts are some of the best in the world. In the
                U.S. News & World Report rankings of top hospitals, Mayo Clinic
                is consistently ranked among the top hospitals in the nation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChoose;
