import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ManageItems = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    // console.log(items)
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
        </div>
    );
};

export default ManageItems;