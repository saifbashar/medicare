import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Stories from '../Stories/Stories';
import WhyChoose from '../WhyChoose/WhyChoose';
import './Home.css';
const Home = () => {
  // use services
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // use Effect
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saifbashar/web-dev/main/services.JSON'
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saifbashar/web-dev/main/doctors.JSON'
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="my-5">
      <div className="container">
        <Row className="">
          <Col
            sm={12}
            lg={6}
            md={6}
            className="d-flex justify-content-center align-items-center "
          >
            <div className="">
              {' '}
              <h1 className="fw-bold green">Your health is our priority</h1>
              <p>
                We’re dedicated to providing the best possible healthcare for
                the people of <b>Bangladesh</b> and helping you access the right
                services when you need them.
              </p>
            </div>
          </Col>

          <Col sm={12} lg={6} md={6}>
            <Image
              className="h-100 w-100"
              src="https://i.ibb.co/9T5vgZ9/3480770-removebg.png"
            ></Image>
          </Col>
        </Row>
      </div>
      <div className="my-5 container">
        <h2 className="text-center text-muted ">Services</h2>
        <h1 className="fw-bold text-center">
          Our <span className="green">Departments</span>
        </h1>
        <p className="text-muted text-center">
          “The art of medicine consists of amusing the patient while nature
          cures the disease.” ― Voltaire
        </p>
        <br />
        {/* Services section */}
        <Row className="gy-3">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </Row>
      </div>
      {/* Doctor Section */}
      <div>
        <h1 className="fw-bold text-center">
          Our <span className="green">Doctors</span>
        </h1>
        <Container>
          <Row>
            {doctors.slice(0, 3).map((doctor) => (
              <Doctor key={doctor.id} doctors={doctor}></Doctor>
            ))}
          </Row>
          <div className="text-center my-4">
            {' '}
            <Link to="/doctors">
              <Button variant="outline-danger">See more Doctors</Button>
            </Link>
          </div>
        </Container>
      </div>
      {/* Why choose section */}
      <WhyChoose></WhyChoose>
      {/* Stories Section */}
      <Stories></Stories>
    </div>
  );
};

export default Home;
