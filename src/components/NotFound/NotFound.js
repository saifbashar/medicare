// Import Section
import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../images/404.jpg';

const NotFound = () => {
  // Not Found Page
  return (
    <div className="container d-flex align-items-center justify-content-between">
      <div>
        <Image src={img}></Image>
      </div>
      <div>
        <h1 className="fw-bold">AWWW...DON’T CRY.</h1>
        <p>It's just a 404 Error! </p>
        <p>
          What you’re looking for may have been misplaced in Long Term Memory.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
