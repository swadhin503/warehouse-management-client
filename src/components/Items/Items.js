import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Item2 from '../Item2/Item2';

const Items = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const navigate = useNavigate();
    const handleNavigate= () => {
        navigate('/manageItems');
    }
    return (
        <div>
              <div className="container mt-4">
            <h1 className="text-center mt-3">Our Items</h1>
                <div className="row">
                {
                    items.slice(0,6).map(item => <Item2
                    key={item._id}
                    item = {item}
                    ></Item2>)
                }
                </div>
                <Button onClick={handleNavigate}  className="d-block mx-auto mt-5" variant="dark" type="submit">
                        Manage Inventory
                 </Button>
            </div>
        </div>
    );
};

export default Items;