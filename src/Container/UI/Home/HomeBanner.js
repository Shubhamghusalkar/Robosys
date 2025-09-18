import React from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from "react-icons/io";
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeBanner = () => {
    const homeBannerContent = [
        {
            title: "Automate. Innovate. Dominate.",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
            img: "assembling-robot-1.png"

        },
        {
            title: "Automate. Innovate. Dominate.",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
            img: "assembling-robot-1.png"
        }
    ];

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (

        <section className='homeBanner'>
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation
                    ]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {
                        homeBannerContent.map((homeContent) => (
                            <SwiperSlide>
                                <div className='grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 gap-10 items-center'>
                                    <div className='homeBannerContent '   >
                                        <p className='text-4xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left font-medium text-white mb-5 'data-aos="fade-right" data-aos-offset="100"  data-aos-duration="500">{homeContent.title}</p>
                                        <p className='text-xl md:text-lg lg:text-lg text-center md:text-left lg:text-left text-white' data-aos="fade-right" data-aos-offset="100" data-aos-duration="600">{homeContent.subTitle}</p>
                                        <div className='flex items-center justify-center md:justify-start lg:justify-start' data-aos="fade-right" data-aos-offset="100" data-aos-duration="700">
                                            <div className="relative group mt-6 text-center w-fit lg:w-fit md:w-fit ">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                            <Link to={'/products'} className="relative z-10 px-6 py-2 md:py-2 lg:py-3 w-fit flex md:justify-start justify-center bg-white rounded-full shadow-md transition-all duration-300">
                                                <span className="flex items-center gap-1 text-black font-medium">
                                                    Shop Now <IoMdArrowRoundForward className="text-black text-bold" />
                                                </span>
                                            </Link>
                                        </div>
                                        </div>
                                        {/* <div className="text-center md:text-left lg:text-left text-white"><button className='px-5 py-2 bg-slate-500 hover:bg-slate-600 rounded mt-5'>Book Now</button></div> */}
                                    </div>
                                    <div className='homeBannerImg flex justify-center'>
                                        <img src={`../assets/img/${homeContent.img}`} alt="" className='w-128' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </section>

    )
}

export default HomeBanner
