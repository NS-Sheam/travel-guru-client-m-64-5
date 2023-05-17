import React, { useRef, createContext, useState } from 'react';
import Header from '../../pages/shared/Header/Header';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
export const DataContext = createContext([]);
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
// register();
// import required modules
import { Pagination, Navigation, HashNavigation, Mousewheel, Keyboard, EffectFade } from "swiper";
import "./Main.css"
const Main = () => {
    const destination = useLoaderData();
    const [background, setBackground] = useState();
    const data = {
        destination,
        background,
        setBackground
    }
    return (
        <div
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  }}
  className="relative background-img"
>
  <DataContext.Provider value={data}>
    <Header />
    <Outlet />
  </DataContext.Provider>
</div>
    );
};

export default Main;

// { background: destination.map(ds => ds.destinationImage) }