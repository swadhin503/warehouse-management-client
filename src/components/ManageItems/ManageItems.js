import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const ManageItems = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    // console.log(items)
    const navigate = useNavigate();
    const handleNavigate= () => {
        navigate('/addItems');
    }
    return (
        <div className="container">
            <h1 className="text-center mt-3">Our Items</h1>
            <div className="row">
                {
                    items.map(item => <Item
                    key={item._id}
                    item = {item}
                    ></Item>)
                }
            </div>
            <Button onClick={handleNavigate}  className="d-block mx-auto mt-5" variant="dark" type="submit">
                        Add New Item
            </Button>
        </div>
    );
};

export default ManageItems;