import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './item.css'

const Item = ({item}) => {
    const {img,name,quantity,price} = item;
    // console.log(name)
    
    return (
        <div className="col-lg-4 col-md-6 col-12 g-4">
            <Card style={{ width: '18rem'}} className="item-height p-2">
                <Card.Img className="p-3 img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Quantity: {quantity} <br />
                    Price: ${price}
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;