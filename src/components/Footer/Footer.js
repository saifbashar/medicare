import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div className="py-5 bg-footer ">
      <div className="container">
        {' '}
        <h1 className="text-white">The Medicare Hospital</h1>
        <div>
          <Row className="row-cols-1">
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Home
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Medical Service And Care
              </a>
            </Col>
            <Col>
              {' '}
              <a href="#home" className="text-decoration-none text-blue">
                Community Health
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Giving
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                About Us
              </a>
            </Col>
          </Row>

          <p className="text-white">
            Request An Apppointment:{' '}
            <span className="text-blue">410-955-5000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
