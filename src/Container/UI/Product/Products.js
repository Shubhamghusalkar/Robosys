import React, { useState, useEffect } from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuCircleDot } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
    useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const product = [
        {
            productName: 'Caretaker Robot',
            productPrice: '$260.00',
            productImg: 'robot-2.png',
            productDes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.'
        },
        {
            productName: 'Laser security system',
            productPrice: '₹598.00',
            productImg: 'robot-1.png',
            productDes: 'A Laser Security System is a simple project that uses a laser and LDR (light sensor) to detect if someone crosses the path. When the laser beam is interrupted, it triggers a buzzer to alert about an intruder.'
        },
        {
            productName: 'Fire detection alarm',
            productPrice: '₹499.00',
            productImg: 'robot-2-2.png',
            productDes: 'This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED'
        },
        {
            productName: 'Laser security system Laser security Laser security',
            productPrice: '₹598.00',
            productImg: 'robot-1.png',
            productDes: 'A Laser Security System is a simple project that uses a laser and LDR (light sensor) to detect if someone crosses the path. When the laser beam is interrupted, it triggers a buzzer to alert about an intruder.'
        },
        {
            productName: 'Fire detection alarm',
            productPrice: '₹499.00',
            productImg: 'robot-2-2.png',
            productDes: 'This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED'
        },
    ]

    const categories = [

        {
            Title: 'Caretaker Robot',
            qty: 2
        },
        {
            Title: 'Laser security system',
            qty: 1
        },
        {
            Title: 'Fire detection alarm',
            qty: 1
        },
        {
            Title: 'Caretaker Robot',
            qty: 2
        },
        {
            Title: 'Laser security system',
            qty: 1
        },


    ]
    return (
        <UIBody
            content={
                <div>
                    <div className='pageBanner h-[450px] bg-no-repeat relative text-white bg-cover bg-fixed flex flex-col gap-3 items-center justify-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-reparation-circuit-board_23-2148419196.jpg?t=st=1754643464~exp=1754647064~hmac=59f2f9e2228c4388038c31259ccec43e682d4e966b621efa364c78a9b31194c2&w=1060')" }}>
                        <p className='text-3xl md:text-4xl lg:text-5xl text-center w-[70%] relative z-10 pt-16' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">Where <b className='text-[color:#e91e63]'>Innovation </b>Meets <b className='text-[color:#e91e63]'>Automation</b>.</p>
                        <p className='text-lg md:text-md text-center w-[100%] md:w-[50%] relative z-10 pt-2' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">Discover high-quality RoBoSyS kits and components to build, program, and innovate.</p>
                        <div className='absolute inset-0 bg-gradient-to-b -bottom-5 md:-bottom-2 lg:bottom-0 from-black/95 to-slate-900/90 '></div>
                    </div>
                    <section className='products py-10 px-5 md:px-5 lg:px-10'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-7 '>
                            {/* <div className='col-span-1 md:pl-0 pt-0 p-4 rounded-lg relative hidden md:block '>
                                <div className='sticky top-20 h-[auto] bg-black/30 rounded-sm text-white'>
                                    <div className='px-4 py-3 text-xl   border-b-2 border-t-4 border-t-pink-700 bg-slate-800 border-b-slate-950 rounded-sm'>Products Categories</div>
                                    <ul className='px-4 py-5 pt-2 h-[470px] overflow-auto scrollbar-div'>
                                        {
                                            categories.map((cate, index) => (
                                                <li >
                                                    <Link className='flex gap-2 items-center justify-between py-2 hover:translate-x-1 transition-all duration-300 '>{cate.Title}<span className=''></span> <span className='text-xs border border-slate-500 h-5 w-5 flex items-center justify-center rounded-full'>{cate.qty}</span></Link>
                                                    <div className='w-full h-[1px] bg-slate-700'></div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div> */}
                            <div className='productsList col-span-1 md:col-span-3 lg:col-span-4 grid-rows-2'>

                                <div className='flex flex-wrap md:flex-nowrap gap-3 md:gap-0 items-center justify-between mb-5'>
                                    <div className='flex items-center justify-between relative w-full md:w-64 lg:w-96 mb-2'>
                                        <input type='text' placeholder='Search..' className='bg-slate-800 rounded px-4 py-2 outline-none text-white w-full' />
                                        <IoSearchSharp className='text-slate-300 ml-2 absolute right-3 top-3 -z-1 cursor-pointer' />
                                    </div>
                                    <div className='flex items-center flex-nowrap gap-2 text-white w-56'>Sort by
                                        <select className='bg-slate-800 border border-slate-600 rounded px-2 py-1.5 outline-0 w-40'>
                                            <option className='text-sm' selected>Select</option>
                                            <option className='text-sm'>4th STD</option>
                                            <option className='text-sm'>5th STD</option>
                                            <option className='text-sm'>6th STD</option>
                                            <option className='text-sm'>7th STD</option>
                                            <option className='text-sm'>8th STD</option>
                                            <option className='text-sm'>9th STD</option>
                                            <option className='text-sm'>10th STD</option>
                                        </select>
                                    </div>
                                    {/* <div className='text-white flex gap-3 items-center ml-4 md:hidden'
                                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    >Filer <IoFilter />

                                        {isFilterOpen ? <span className='flex px-2 py-1 items-center gap-2 text-white text-xl fixed bottom-[60.6%] md:top-28 left-[1%] z-[99] bg-slate-700'><IoClose className="" />Close</span> : <IoFilter className="text-white text-3xl fixed top-5 right-5 z-40" />}
                                    </div>
                                    {
                                        isFilterOpen && (
                                            <div className='md:hidden fixed bottom-0 right-0 w-full  backdrop-blur-sm z-20 h-[100%] border-t border-gray-200 shadow-md pl-10 py-4 space-y-6 text-white font-medium' style={{ backgroundColor: "#000000db" }}>
                                                <div className='h-[60%] fixed z-10 bottom-0 w-96 left-0  bg-white/30 rounded-sm text-white'>
                                                    <div className='px-4 py-3 text-xl  relative border-b-2 border-t-4 border-t-pink-700 bg-slate-800 border-b-slate-950 rounded-sm'>Products Categories

                                                    </div>
                                                    <ul className='px-4 py-5 pt-2 h-[460px] overflow-auto scrollbar-div'>
                                                        {
                                                            categories.map((cate) => (
                                                                <li >
                                                                    <Link className='flex gap-2 items-center justify-between py-2 hover:translate-x-1 transition-all duration-300 '>{cate.Title}<span className=''></span> <span className='text-xs border border-slate-500 h-5 w-5 flex items-center justify-center rounded-full'>{cate.qty}</span></Link>
                                                                    <div className='w-full h-[1px] bg-slate-700'></div>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    } */}
                                </div>
                                <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                    {
                                        product.map((product, index) => (
                                            <div className='product-card group bg-slate-800 rounded-md border border-slate-700 hover:-translate-y-2 transition-all duration-300 ' data-aos="fade-up" data-aos-offset="50"  data-aos-duration="500">
                                                <Link to={'/product-view'} key={index} title={product.productName}>
                                                    <div className='relative'>
                                                        <div className='flex justify-center'>
                                                            <img src={`/assets/img/${product.productImg}`} alt="" className='w-42 h-48 md:h-64 lg:h-64 object-contain md:w-72 lg:w-72 py-5  ' />
                                                        </div>
                                                        <span className='text-white cursor-pointer absolute z-10 px-2 py-1 text-sm font-normal bg-slate-700 backdrop-blur-lg border border-slate-600 rounded-full top-5 md:top-3 lg:top-4 right-16 md:right-14 lg:right-16 hover:scale-105 transition-all'>
                                                            6th STD
                                                        </span>
                                                        <span className='cursor-pointer absolute z-10 p-2 md:p-2 bg-slate-900 border border-slate-600 rounded-full top-5 md:top-2 lg:top-3 right-5 md:right-2 lg:right-5 hover:scale-105 transition-all'>
                                                            <FaRegHeart className='text-slate-300 text-md md:text-xl hover:scale-110 transition-all' />
                                                        </span>
                                                        <span className='cursor-pointer absolute z-10 p-2 md:p-2 bg-slate-900 border-2 border-slate-900 rounded-full top-16 md:top-14 lg:top-16 right-5 md:right-2 lg:right-5 hover:scale-105 transition-all'

                                                        >
                                                            <AiOutlineShoppingCart className='text-slate-300 text-md md:text-xl hover:scale-110 transition-all' />
                                                        </span>
                                                        <span className='absolute bottom-0 left-0 text-white text-md font-medium bg-[color:#e91e63] px-4 py-2 pr-6'>{product.productPrice}</span>
                                                    </div>
                                                    <div className='p-5 pt-0 border-t border-slate-700 bg-slate-700 rounded-b-md'>
                                                        <p className='text-xl md:text-md lg:text-lg h-[auto] md:h-[73px] lg:h-[75px] max-w-80 text-white py-3 font-medium line-clamp-2 overflow-hidden'>{product.productName}</p>
                                                        <div className='flex gap-1 '>
                                                            <FaStar className='text-blue-400' />
                                                            <FaStar className='text-blue-400' />
                                                            <FaStar className='text-blue-400' />
                                                            <FaStar className='text-blue-400' />
                                                            <FaStarHalf className='text-blue-400' />
                                                        </div>
                                                        <p className='text-sm text-slate-300 pt-3 line-clamp-4 overflow-hidden'>{product.productDes}</p>
                                                        <span className='flex gap-1 items-center text-white pt-1 group-hover:underline hover:font-semibold w-fit transition-all'>Read More <IoMdArrowRoundForward className="text-bold transform transition-transform duration-300 group-hover:translate-x-1 " /></span>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            }
        />
    )
}

export default Products
