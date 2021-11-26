// Import section
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  // Destructuring the auth
  const { user, logOut } = useAuth();

  return (
    <div className="shadow-sm">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="text-decoration-none" to="/">
            {' '}
            <Navbar.Brand>
              <img
                src="https://media.istockphoto.com/vectors/caduceus-medical-symbol-vector-id471629610?k=20&m=471629610&s=612x612&w=0&h=XQJzrg_bg7Xpko0QtoD7o2nigvlEVq0VVVA4QtKsNJk="
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span className="fw-bold ms-2">Medicare</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link m-auto px-2" to="/">
                <Button variant="outline-dark border-0 ">Home</Button>
              </Link>
              <Link className="link m-auto px-2" to="/appointments">
                <Button variant="outline-dark border-0 "> Appointments</Button>
              </Link>

              <Link to="/doctors" className="link m-auto px-2">
                <Button variant="outline-dark border-0 "> Doctors</Button>
              </Link>
              <Link className="link m-auto px-2" to="/about">
                <Button variant="outline-dark border-0 ">About</Button>
              </Link>

              {user.displayName && (
                <Navbar.Text className="text-center">
                  Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
              )}
              <div className="mx-auto">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    className="img-header ps-2"
                    alt="user-profile"
                  ></img>
                )}
              </div>
              {user.displayName ? (
                <Button
                  className="ms-2"
                  onClick={logOut}
                  variant="outline-danger border-0"
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login" className="link m-auto px-2">
                  <Button variant="outline-dark border-0 "> Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
