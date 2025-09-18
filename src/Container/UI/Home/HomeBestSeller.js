import React, { useState } from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaStarHalf } from "react-icons/fa";
import Toaster from '../../../Component/Common/Toaster';

const HomeBestSeller = () => {
    const [showToast, setShowToast] = useState(false);

    const products = [
        {
            id: 1,
            productName: 'Caretaker Robot',
            productPrice: '$260.00',
            productImg: 'robot-2.png',
            productDes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.'
        },
        {
            id: 2,
            productName: 'Laser security system',
            productPrice: '₹598.00',
            productImg: 'robot-1.png',
            productDes: 'A Laser Security System is a simple project that uses a laser and LDR (light sensor) to detect if someone crosses the path. When the laser beam is interrupted, it triggers a buzzer to alert about an intruder.'
        },
        {
            id: 3,
            productName: 'Fire detection alarm',
            productPrice: '₹499.00',
            productImg: 'robot-2-2.png',
            productDes: 'This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED'
        },
        {
            id: 4,
            productName: 'Shubham Ghusalkar',
            productPrice: '₹500.00',
            productImg: 'robot-2-2.png',
            productDes: 'This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED'
        },
    ]

    const [cartItem, setCartItem] = useState(0);

    return (
        <section className='bestSeller px-5 0 py-16 md:px-10 lg:px-20 lg:py-20 md:py-10'>
            <h4 className='text-4xl text-white font-medium text-center' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">Our Best Sellers</h4>
            <div className='sellerProducts' >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1500,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        products.map((product, index) => (
                            <SwiperSlide className='pt-14 group' >
                                <Link to={'/product-view'} key={index} title={product.productName}  >
                                    <div className='product-card bg-slate-800 rounded-lg border border-slate-700 mb-4 lg:mb-0' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">
                                        <div className='relative'>
                                            <div className='flex justify-center'>
                                                <img src={`/assets/img/${product.productImg}`} alt="" className='w-42 h-48 md:h-64 lg:h-64 object-contain md:w-72 lg:w-72 py-5  ' />
                                            </div>
                                            <span className='text-white cursor-pointer absolute z-10 px-2 py-1 text-sm font-normal bg-slate-700 backdrop-blur-lg border border-slate-600 rounded-full top-5 md:top-3 lg:top-4 right-16 md:right-14 lg:right-16 hover:scale-105 transition-all'>
                                                6th STD
                                            </span>
                                            <span className='cursor-pointer absolute z-[999] p-2 md:p-2 bg-slate-900 border border-slate-600 rounded-full top-5 md:top-2 lg:top-3 right-5 md:right-2 lg:right-5 hover:scale-105 transition-all'>
                                                <FaRegHeart className='text-slate-300 text-md md:text-xl hover:scale-110 transition-all' />
                                            </span>
                                            <span className='cursor-pointer absolute z-10 p-2 md:p-2 bg-slate-900 border-2 border-slate-900 rounded-full top-16 md:top-14 lg:top-16 right-5 md:right-2 lg:right-5 hover:scale-105 transition-all'

                                            >
                                                <AiOutlineShoppingCart className='text-slate-300 text-md md:text-xl hover:scale-110 transition-all' />
                                            </span>
                                            <span className='absolute bottom-0 left-0 text-white text-md font-medium bg-[color:#e91e63] px-4 py-2 pr-6'>{product.productPrice}</span>
                                        </div>
                                        <div className='p-5 pt-0 border-t border-slate-700 bg-slate-700 rounded-b-md'>
                                            <p className='text-2xl md:text-2xl lg:text-xl max-w-80 text-white py-3 font-medium'>{product.productName}</p>
                                            <div className='flex gap-1 '>
                                                <FaStar className='text-blue-400' />
                                                <FaStar className='text-blue-400' />
                                                <FaStar className='text-blue-400' />
                                                <FaStar className='text-blue-400' />
                                                <FaStarHalf className='text-blue-400' />
                                            </div>
                                            <p className='text-md text-slate-300 pt-3 line-clamp-4 overflow-hidden'>{product.productDes}</p>
                                            <span className='flex gap-1 items-center text-white pt-1 group-hover:underline hover:font-semibold w-fit transition-all'>Read More <IoMdArrowRoundForward className="text-bold transform transition-transform duration-300 group-hover:translate-x-1 " /></span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className='w-full text-center mt-4' data-aos="fade-up" data-aos-duration="600">
                <div className="relative inline-block group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Link to={'/products'} className="w-full flex relative z-10 px-6 py-2 md:py-2 lg:py-3 bg-white rounded-full shadow-md transition-all duration-300">
                        <span className="flex items-center gap-1 text-black font-medium">
                            Shop Now <IoMdArrowRoundForward className="text-black text-bold" />
                        </span>
                    </Link>
                </div>
                

            </div>
        </section>
    )
}

export default HomeBestSeller
