import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id} = useParams();
    const [item,setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    const {img,description,supplier_name,name,quantity,price} = item;

    fetch(`http://localhost:5000/items/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify()
    })
    const navigate = useNavigate();
    const handleNavigate= () => {
        navigate('/manageItems');
    }

    return (
        <div className="container">
            <h2 className="text-center mt-3"> Update Stock</h2>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12 d-flex align-items-center
                    justify-content-center item-container1">
                        <Card style={{ width: '18rem'}} className="item-container p-2">
                            <Card.Img className="p-3 img-fluid" variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text>
                                Quantity: {quantity} <br />
                                Price: ${price}
                                <br />
                                Supplier Name: {supplier_name}
                                </Card.Text>
                                <Button className="d-block mx-auto" variant="dark">Delivered</Button>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <div className="mt-5 input-border mb-5">
                    <h3 className="text-center">Restock The Item</h3>

                    <Form>
                        <Form.Group className="mb-3 mt-4">
                        <Form.Control className="w-25 d-block mx-auto" type="text" placeholder="Enter quantity" />
                       </Form.Group>
                   
                        <Button  className="d-block mx-auto" variant="dark" type="submit">
                        Add
                        </Button>
                    </Form>
                </div>
                <Button onClick={handleNavigate}  className="d-block mx-auto mt-5" variant="dark" type="submit">
                        Manage Inventory
                 </Button>
        </div>
    );
};

export default Inventory;