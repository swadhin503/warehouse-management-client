import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SIgnUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
          <div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
        );
    }

    if(user){
        navigate("/home");
    }
    if(loading){
        return (
            <Spinner animation="border" role="status">
                 <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    
    const handleCreateUser = (event) => {
        if(password != confirmPassword) {
            return(
              <div>
                <p className="text-danger">Please, type password again</p>
              </div>)
        }

        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
  
    return (
        <div>
            <h1 className="text-center text-dark text-bold mt-5">Sign Up</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h6 className="text-center mt-5">Email address</h6>
                    <Form.Control onBlur={(e) => setEmail(e.target.value)} className="d-block w-50 mx-auto" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6 className="text-center">Password</h6>
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} className="d-block w-50 mx-auto" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <h6 className="text-center">Confirm Password</h6>
                    <Form.Control onBlur={(e) => setConfirmPassword(e.target.value)} className="d-block w-50 mx-auto" type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={handleCreateUser} className="d-block w-25 mx-auto" variant="dark" type="submit">
                    Create Account
                </Button>
           </Form>

           
           <hr className="mt-5 border border-dark border-3" />

           
        </div>
    );
};

export default SIgnUp;