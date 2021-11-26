import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  // useState for store data
  const [doctors, setDoctors] = useState([]);
  // useEffect for load data from api
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saifbashar/web-dev/main/doctors.JSON'
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center fw-bold my-2">
        Our <span className="green">Doctors</span>
      </h2>
      <Container>
        <Row className="g-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctors={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
