import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/banner-1.jpg'
import img2 from '../../images/banner-2.jpg'
import img3 from '../../images/banner-3.jpg'
import Items from '../Items/Items';
import LineChartComp from '../LineChartComp/LineChartComp';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    
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

          <Items></Items>
          <LineChartComp></LineChartComp>
          <Reviews></Reviews>
          
        </div>
    );
};

export default Home;