import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  // Destructuring the property
  const {
    error,
    isLogin,
    toggleLogin,
    googleSignIn,
    handleName,
    handleEmail,
    handlePassword,
    handleResetPassword,
    handleRegistration,
    user,
  } = useAuth();
  // console.log(user.displayName);
  // just practice

  // use location
  const location = useLocation();
  const redirect_url = location.state?.form || '/home/';

  // use history
  const history = useHistory();

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      history.push(redirect_url);
    });
  };
  // console.log(user);
  // login form
  return (
    <div className="login min-vh-100  d-flex justify-content-center align-items-center ">
      <div className="login-block d-flex justify-content-center align-items-center">
        {user.displayName ? (
          <div className="min-vh-100 d-flex align-items-center">
            <h2>Congratulations! Your are login</h2>
          </div>
        ) : (
          <div className="w-75 my-4">
            <Image
              className="img-fluid"
              src="https://i.ibb.co/LP6q5BM/undraw-doctors-hwty.png"
            ></Image>
            <h2 className="text-center">
              {isLogin ? 'Login your account' : 'Register new account'}
            </h2>
            <Form action="#" method="POST" onSubmit={handleRegistration}>
              <p className="text-muted text-center">
                By Proceeding our Terms and Conditions
              </p>
              {!isLogin && (
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onBlur={handleName}
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onBlur={handleEmail}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onBlur={handlePassword}
                />
              </Form.Group>
              {!isLogin ? (
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Already 
  Registered?"
                    onChange={toggleLogin}
                  />
                </Form.Group>
              ) : (
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Wasn't registered yet?"
                    onChange={toggleLogin}
                  />
                </Form.Group>
              )}
              <p className="text-danger">{error}</p>
              <Button
                variant="outline-primary"
                className="w-100"
                size="sm"
                type="submit"
              >
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Form>{' '}
            <Button
              onClick={handleResetPassword}
              variant="outline-danger"
              className="my-1 w-100"
              size="sm"
            >
              Forget Password?
            </Button>
            <h5 className="fw-bold">OR</h5>
            <Button
              variant="outline-primary"
              className="w-100"
              onClick={handleGoogleSignIn}
              size="sm"
            >
              Continue with google
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
