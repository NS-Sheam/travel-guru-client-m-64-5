import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

const Carousel = ({setActiveIndex, destination}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                    clickable: true
                }}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                
                onSlideChange={(swiper) => {
                    console.log(swiper.activeIndex);
                    setActiveIndex(swiper.activeIndex)
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    destination.map(dest => (
                        <SwiperSlide key={dest.id} className=' rounded-lg'>
                            <img className='h-44 md:h-full w-full object-cover border-2 border-orange-400 rounded-lg' src={dest.destinationSliderImg} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='swiper-btn-container mx-auto'>
                <div className="swiper-button-next after:text-white after:bg-black after:p-3 after:rounded-xl md:after:rounded-3xl" ref={nextRef}></div>
                <div className="swiper-button-prev  after:text-white after:bg-black after:p-3 after:rounded-xl md:after:rounded-3xl" ref={prevRef}></div>
            </div>
        </>
    );
};

export default Carousel;