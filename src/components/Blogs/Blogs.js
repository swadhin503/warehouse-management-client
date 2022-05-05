import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">BLOGS</h1>
            <div className="row mt-5">
                <div className="col-lg-3 col-12 col-md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> Difference between javascript and nodejs</Card.Title>
            
                            <Card.Text>
                            JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-12 col-md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> When should you use nodejs and when should you use mongodb</Card.Title>
            
                            <Card.Text>
                            There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-12 col-md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> Differences between sql and nosql databases</Card.Title>
            
                            <Card.Text>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-12 col-md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> What is the purpose of jwt and how does it work?</Card.Title>
            
                            <Card.Text>
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Blogs;