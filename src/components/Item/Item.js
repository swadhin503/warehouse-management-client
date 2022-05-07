import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useItems from '../hooks/useItems';
import './item.css'

const Item = ({item}) => {
    const {_id,img,name,quantity,price} = item;
    // console.log(name)
    const [items,setItems] = useItems();
    const handleDelete = (id) => {
        const procced = window.confirm('Are you sure you want to delete');
        if (procced){
            const url = `http://localhost:5000/items/${id}`;
            fetch(url,{
                method: 'DELETE',  
            })
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    
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
                    <Button onClick={()=>handleDelete(_id)} variant="dark">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;