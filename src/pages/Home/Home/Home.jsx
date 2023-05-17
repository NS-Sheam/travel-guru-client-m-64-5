import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../../layouts/Main/Main';
import "./Home.css";
import Carousel from './carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    const { destination, setBackground } = useContext(DataContext);

    const [activeIndex, setActiveIndex] = useState(0);
    setBackground(destination[activeIndex].destinationImage)

    return (
        <div className='container mx-auto px-8 md:flex items-start justify-between md:h-screen'>
            <div className='md:w-1/2 text-white text-center md:text-left my-5'>
                <h1 className="text-3xl md:text-5xl font-bold">{destination[activeIndex].destinationName}</h1>
                <p className='my-5'>{destination[activeIndex].destinationDescription}</p>
                <Link>
                    <button className="btn btn-warning w-32">Book Now</button>
                </Link>
            </div>
            <div className='md:w-1/2 h-1/3 md:h-1/2 relative my-5'>
                <Carousel
                    setActiveIndex={setActiveIndex}
                    destination={destination}
                ></Carousel>
            </div>
        </div>
    );
};

export default Home;
