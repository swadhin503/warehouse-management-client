import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
      );

    let showError;
    if (error || error1 || error2) {
         showError =  <p className="text-danger text-center">Error: {error?.message  || error1?.message || error2?.message}</p>;
    }

    if(user || user1){
        navigate(from, {replace:true}) ;
    }
    if(loading || loading1 || sending){
        return (
            <div style={{height: '400px'}} className="d-flex align-items-center justify-content-center mt-5">
                <Spinner className="mt-5"  animation="border" role="status">
                </Spinner>
            </div>
        )
    }

    
    const handleCreateUser = async event => {
           event.preventDefault()
           signInWithEmailAndPassword(email, password);
            const {data} = await axios.post('http://localhost:5000/login',{email});
            localStorage.setItem('accessToken',data.accessToken);


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
            <h1 className="text-center text-dark text-bold mt-5">Laptop's Warehouse</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h6 className="text-center mt-5">Email address</h6>
                    <Form.Control onBlur={(e) => setEmail(e.target.value)} className="d-block w-50 mx-auto" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6 className="text-center">Password</h6>
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} className="d-block w-50 mx-auto" type="password" placeholder="Password" />
                </Form.Group>

                {showError}

                <Button onClick={handleCreateUser} className="d-block mx-auto" variant="dark" type="submit">
                    Login
                </Button>
                  <p className="ms-2 mt-5">Forget Password?  <Button variant="dark"
                onClick={async () => {
                    
                await sendPasswordResetEmail(email);
                toast("Email sent !!!");
                }}
               >
                Reset password
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

        <p className="ms-5 mt-5 mb-5">New in Laptop's Warehouse? <Link className="text-decoration-none" to="/signup">Create an account</Link></p>

        </div>
    );
};

export default Login;