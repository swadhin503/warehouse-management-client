import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import './Reviews.css'

const Reviews = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Customer Reviews</h2>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Tawhid Dwin Swadhin</Card.Title>
                        <Card.Text>
                        The products are well designed and fast delivery
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Asrafilil Samiu</Card.Title>
                        <Card.Text>
                        So much trustable.
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Abrar Tayeeb</Card.Title>
                        <Card.Text>
                        Awsome!!!
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Biplop Ahmed</Card.Title>
                        <Card.Text>
                        The service is so good.
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Akash Ahmed</Card.Title>
                        <Card.Text>
                        Trustworthy!
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Nahid Hasan</Card.Title>
                        <Card.Text>
                        Not bad.
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
               
                <div className="col-lg-3 col-md-4 col-6">
                <Card className="card-design">
                    <Card.Body>
                        <Card.Title>Alber Inestian</Card.Title>
                        <Card.Text>
                        Great company
                        </Card.Text>
                        <Card.Text>
                        <small>Rating: <FaStar className="icon-color"/> <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  <FaStar className="icon-color"/>  </small>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
                
            </div>

        </div>
    );
};

export default Reviews;