import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';


const Inventory = () => {
    const {id} = useParams();
    const [input,setInput] = useState();
    const [item,setItem] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-beach-33960.herokuapp.com/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[item])
    const {img,description,supplier_name,name,quantity,price} = item;

    const handleDeliver = (item,id) =>{
        const newQuantity = parseInt(item.quantity)-1;
        
        const updatedQuantity = {quantity:newQuantity};
        
        fetch(`https://mighty-beach-33960.herokuapp.com/items/${id}`,{
            method: 'PUT',
            body: JSON.stringify(updatedQuantity),
            headers: {
                'content-type': 'application/json',
            }
            
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('Updated Successfully');
        })
    }
    const handleInput =(event) => {
        const number = event.target.value;
        setInput(number);
    }
    const handleAdd = (event) => {
        event.preventDefault()
        const quantityNumber = parseInt(input);
        const newQuantity = quantityNumber + parseInt(item.quantity);
        const updatedQuantity = {quantity:newQuantity};
        // console.log(updatedQuantity);
        fetch(`https://mighty-beach-33960.herokuapp.com/items/${id}`,{
            method: 'PUT',
            body: JSON.stringify(updatedQuantity),
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('Updated Successfully');
        })
    }

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
                                <Button onClick={()=>handleDeliver(item,id)} className="d-block mx-auto" variant="dark">Delivered</Button>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <div className="mt-5 input-border mb-5">
                    <h3 className="text-center">Restock The Item</h3>

                    <Form >
                        <Form.Group className="mb-3 mt-4">
                        <Form.Control onBlur={handleInput} className="w-25 d-block mx-auto" type="text" placeholder="Enter quantity" />
                       </Form.Group>
                   
                        <Button onClick={handleAdd} className="d-block mx-auto" variant="dark" type="submit">
                        Add
                        </Button>
                    </Form>
                </div>
                <Button  onClick={handleNavigate}  className="d-block mx-auto mt-5" variant="dark" type="submit">
                        Manage Inventory
                 </Button>
        </div>
    );
};

export default Inventory;