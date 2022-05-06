import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Item2.css'

const Item2 = ({item}) => {
    const {img,name,quantity,description,price,supplier_name} = item;
    return (
        <div className="col-lg-4 col-md-6 col-12 g-4">
            <Card style={{ width: '18rem'}} className="item-container p-2">
                <Card.Img className="p-3 img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                    Quantity: {quantity} <br />
                    Price: ${price}
                    Supplier Name: {supplier_name}
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item2;