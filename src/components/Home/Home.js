import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/banner-1.jpg'
import img2 from '../../images/banner-2.jpg'
import img3 from '../../images/banner-3.jpg'
import Item2 from '../Item2/Item2';

const Home = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <Carousel className="mt-1">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>The Best Products</h3>
                    <p>Explore uur website and order now to get the best products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>The Best Products</h3>
                    <p>Explore uur website and order now to get the best products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>The Best Products</h3>
                    <p>Explore uur website and order now to get the best products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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
            </div>
        </div>
    );
};

export default Home;