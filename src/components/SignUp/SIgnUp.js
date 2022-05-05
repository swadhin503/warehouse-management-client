import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const SIgnUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    
    let showError;
    if (error || error1 || error2) {
        showError =  <p className="text-danger text-center">Error: {error?.message  || error1?.message || error2?.message}</p>
    }

    if(user || user1){
        navigate("/home");
    }
    if(loading || loading1 || sending){
        return (
            <div className="d-flex align-items-center justify-content-center mt-5">
                <Spinner className="mt-5"  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    
    const handleCreateUser = (event) => {
        if(password === confirmPassword) {
           event.preventDefault()
           createUserWithEmailAndPassword(email, password)
        }
        else{
            return(
                <div>
                  <p className="text-danger">Please, type password again</p>
                </div>)
        }
        
    }

    const handleCreateUserGoggle = (event) => {
        event.preventDefault()
        signInWithGoogle();
    }
  
    return (
        <div>
            <div className="position-relative">
                <ToastContainer className="position-absolute top-0 end-0"></ToastContainer>
            </div>
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
                {showError}

                <Button onClick={handleCreateUser} className="d-block mx-auto" variant="dark" type="submit">
                    Create Account
                </Button>
                <p className="ms-2 mt-5">Please, Verify Your Email  <Button variant="dark"
                onClick={async () => {
                    
                await sendEmailVerification();
                toast("Email sent !!!");
                }}
               >
                Verify Email
            </Button></p>
           </Form>

           
           <hr className="mt-5 border border-dark border-3" />
           <h2 className="text-bold text-center">Or</h2>
           <hr className=" border border-dark border-3" />

        <div>
          <Button onClick={handleCreateUserGoggle} className="d-block w-25 mx-auto mt-5" variant="dark" type="submit">
                    Sign In With Google
          </Button>
        </div>
        
        <p className="ms-5 mt-5 mb-5">Already have an account? <Link className="text-decoration-none" to="/login">Click here</Link></p>

        </div>
    );
};

export default SIgnUp;