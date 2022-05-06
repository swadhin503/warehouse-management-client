import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    if(loading) {
        return (
             <div style={{height: '400px'}} className="d-flex align-items-center justify-content-center mt-5">
                <Spinner  animation="border" role="status">
                </Spinner>
             </div>
        )
    }
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;