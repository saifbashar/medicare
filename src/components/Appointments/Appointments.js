import React from 'react';
import { Button, Image } from 'react-bootstrap';

const Appointments = () => {
  return (
    <div className="container my-5 mx-auto">
      <div className="d-flex justify-content-center">
        <Image
          className=" img-fluid"
          src="https://i.ibb.co/x5N7mp0/undraw-doctor-kw5l.png"
        ></Image>
      </div>
      <div className="text-center">
        <h2 className="text-center fw-bold">
          Online <span className="green">Self-Scheduling</span>
        </h2>
        <h4 className="my-3">24/7 Ease and Convenience </h4>
        <Image
          className="img-fluid"
          src="https://www.dmcprimarycare.com/wp-content/uploads/2021/03/doc-asap-computer.jpg"
        ></Image>
      </div>
      <div className="border w-75 mx-auto p-3  text-center border-dark rounded-3 my-3">
        <h4>SELF-SCHEDULE YOUR NEXT APPOINTMENT!</h4>

        <Button variant="outline-danger">Self Schedule Now</Button>
      </div>
      <p>
        Scheduling your doctor’s appointments has never been easier. With DMC’s
        online self-scheduling, you can find the time that fits your schedule
        with the healthcare provider of your choice and schedule your
        appointment in just a couple of minutes. Online self-schedule is
        available for both new and current patients. Take control of your health
        today!
      </p>
      <p className="fw-bold">
        Please note: NEW PATIENTS seeking a same-day appointment should call us
        at 603-537-1300 instead of booking online.
      </p>
      <h5>To self-schedule:</h5>
      <ul>
        <li>This will open a new tab via our scheduling partner, DOCASAP.</li>
        <li>
          You will be asked to identify the reason for your visit (annual
          physical, follow-up, etc.) and answer some additional questions.
        </li>
        <li>
          Click on “See All Providers” to find the provider you would like to
          book with. You can also use the “More Filters” button at the top to
          search for specific providers or office locations.
        </li>
        <li>
          Select the month and date for which you would like to schedule an
          appointment. Available times for providers will be shown, or you will
          see the next available time if the provider has no openings during
          your selected timeframe.
        </li>
        <li>Select the desired appointment time.</li>
      </ul>
    </div>
  );
};

export default Appointments;
