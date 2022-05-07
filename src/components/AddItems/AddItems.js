import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/items',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
        alert('Added successfully')
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center">Add New Item To Stock</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items-center flex-column">
                <p className="text-center">Image </p>
                <input className="w-25 input-field" {...register("img", { required: true })} />
                <p className="text-center">Name</p>
                <input className="w-25 input-field" {...register("name", { required: true })} />
                <p className="text-center">About Item</p>
                <textarea className="w-25 input-field" {...register("description")} />
                <p className="text-center">Quantity</p>
                <input className="w-25 input-field" {...register("quantity")} />
                <p className="text-center">Price </p>
                <input className="w-25 input-field" {...register("price")} />
                <p className="text-center">Supplier Name</p>
                <input className="w-25 input-field" {...register("supplier_name")} />

                <input className="mt-4 input-btn" value="Add To Stock" type="submit" />
             </form>
        </div>
    );
};

export default AddItems;