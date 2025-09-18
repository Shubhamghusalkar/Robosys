import React, { use, useState, useEffect } from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
    useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);
    const [activeTab, setActiveTab] = useState('Orders');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const editProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    }
    
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const viewOrderDetails = () => {
        setIsOrderOpen(!isOrderOpen);
    }

    const [isEditAddress, setIsEditAddress] = useState(false);
    const editAddress = () => {
        setIsEditAddress(!isEditAddress);
    }

    const [isAddAddress, setIsAddAddress] = useState(false);
    const addAddress = () => {
        setIsAddAddress(!isAddAddress);
    }

    return (
        <UIBody
            content={
                <section className='profileSec px-5 md:px-10 lg:px-10 pb-10 text-white relative pt-24'>
                    <div className="text-center text-4xl font-semibold pb-12">Profile</div>

                    <div className='profileDetails '>
                        <div className='flex justify-center border-b border-b-slate-700 pb-4'>
                            <div className='w-[100%] lg:w-[50%]'>
                                <div className='profileCard  text-center relative'>
                                    <div className='flex flex-col gap-5 '>
                                        <label className='font-normal text-2xl'><span>Shubham Ghusalkar </span></label>
                                        <label className='font-normal text-2xl'><span>shubham@gmail.com </span></label>
                                        <label className='font-normal text-2xl'> <span>9767210284</span></label>
                                    </div>
                                    <span onClick={editProfile} className='text-lg absolute top-0 right-0 cursor-pointer flex gap-2 items-center border border-slate-500 px-1.5 py-1 rounded' title='Edit Profile'><HiOutlinePencilAlt className=' ' /></span>
                                    {
                                        isProfileOpen && <div className="bg-black/80 md:pt-10 lg:pt-10 fixed inset-0 flex justify-center items-center z-[999] backdrop-blur-[3px]">
                                            <div className="w-[100%] m-6 md:w-[70%] lg:w-[40%] h-auto rounded shadow-xl shadow-slate-950 relative bg-white/30 backdrop-blur">
                                                <IoClose
                                                    onClick={editProfile}
                                                    className="text-white text-2xl absolute -top-2 -right-2 z-[99999] cursor-pointer bg-red-700 rounded hover:scale-110"
                                                />
                                                <div className="text-left text-xl font-semibold text-white px-6 py-3 border-b border-slate-800">Enter Details</div>
                                                <div className="overflow-auto scrollbar-div text-left py-4 px-6">
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Name</label>
                                                        <input
                                                            type="text"
                                                            value="Shubham Ghusalkar"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Email Id</label>
                                                        <input
                                                            type="text"
                                                            value="shubham@gmail.com"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Mobile No.</label>
                                                        <input
                                                            type="text"
                                                            value="9767210284"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex justify-center ">
                                                        <button className="w-fit px-14 py-2 mt-2 mb-2 md:mb-3 lg:mb-3 rounded-lg bg-slate-300 hover:bg-white outline-none text-black font-semibold">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    }
                                </div>
                            </div>
                        </div>
                        <div className="tabs-container py-5">
                            <div className="tab-buttons flex justify-center gap-4 mb-5 w-full">
                                <button
                                    className={activeTab === 'Address' ? 'active relative scale-105 px-10 py-1.5 my-5 bg-slate-400 text-black font-semibold after:absolute after:-bottom-1.5 after:right-[45%] rounded after:h-3 after:w-3  after:rotate-45 after:bg-slate-400' : ' border border-transparent hover:border-slate-600 rounded my-5 px-10 py-1.5 bg-slate-700 scale-100 hover:scale-105'}
                                    onClick={() => setActiveTab('Address')}
                                >
                                    Address
                                </button>



                                <button
                                    className={activeTab === 'Orders' ? 'active relative scale-105 px-10 py-1.5 my-5 bg-slate-400 text-black font-semibold after:absolute after:-bottom-1.5 after:right-[45%] rounded after:h-3 after:w-3 after:rotate-45 after:bg-slate-400' : 'border border-transparent hover:border-slate-600 rounded my-5 px-10 py-1.5 bg-slate-700 scale-100 hover:scale-105'}
                                    onClick={() => setActiveTab('Orders')}
                                >
                                    Orders
                                </button>
                            </div>
                            <div className="tab-content">
                                {activeTab === 'Address' && <div className='flex justify-center items-center flex-col'>
                                    <button
                                        className="w-fit border border-slate-900 hover:border-transparent rounded-lg mb-5 px-10 py-1.5 bg-slate-200 text-black font-semibold flex items-center gap-2"
                                        onClick={addAddress}>
                                        Add <AiOutlinePlusSquare className='text-xl' />
                                    </button>

                                    {
                                        isAddAddress && <div className="bg-black/80 md:pt-10 lg:pt-32 scrollbar-div h-[100vh] overflow-auto fixed inset-0 flex justify-center items-center z-[999] backdrop-blur-[3px]">
                                            <div className="w-[100%] m-6 md:w-[70%] lg:w-[40%] h-auto rounded shadow-xl shadow-slate-950 relative bg-white/30 backdrop-blur">
                                                <IoClose
                                                    onClick={addAddress}
                                                    className="text-white text-2xl absolute -top-2 -right-2 z-[99999] cursor-pointer bg-red-700 rounded hover:scale-110"
                                                />
                                                <div className="text-left text-xl font-semibold text-white px-6 py-3 border-b border-slate-800">Add Address</div>
                                                <div className="text-left py-4 px-6">
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Building</label>
                                                        <input
                                                            type="text"
                                                            value="203, ABC Aprtment"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Area</label>
                                                        <input
                                                            type="text"
                                                            value="Dighi"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">State</label>
                                                        <input
                                                            type="text"
                                                            value="Maharashtra"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">City</label>
                                                        <input
                                                            type="text"
                                                            value="Pune"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">ZIP Code</label>
                                                        <input
                                                            type="text"
                                                            value="123456"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                        <label className="mb-1 text-[14px]">Mobile No.</label>
                                                        <input
                                                            type="text"
                                                            value="1234567890"
                                                            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                        />
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <button className="w-fit px-14 py-1.5 md:py-2 lg:py-2 mt-2 mb-2 md:mb-3 lg:mb-3 rounded-lg bg-slate-300 hover:bg-white outline-none text-black font-semibold">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full' >
                                        <div className='shadow-2xl addressCard bg-slate-700 rounded-lg  hover:scale-[1.03] scale-[0.99] transition duration-200' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">
                                            <div className='px-5 py-2.5 text-center rounded-t-lg border-b border-b-slate-800 bg-pink-800 font-normal relative'>Address 1
                                                <HiOutlinePencilAlt onClick={editAddress} className='absolute top-3 right-3 text-lg cursor-pointer hover:scale-110 transition' title='Edit' />
                                            </div>
                                            <p className='p-4 pb-0 flex items-start gap-2  '> <div className='bg-slate-300 p-1.5 rounded-full'><FaLocationDot className="p-[0.5px] text-sm text-black" /></div> 203, Sysinsight Dighi, Pune</p>
                                            <p className='p-4 flex items-center gap-2  '> <div className='bg-slate-300 p-1.5 rounded-full'><FaPhone className="p-[0.5px] text-sm text-black" /></div> 1234567890</p>
                                        </div>
                                        <div className='shadow-2xl addressCard bg-slate-700 rounded-lg  hover:scale-[1.03] scale-[0.99] transition duration-200' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">
                                            <div className='px-5 py-2.5 text-center rounded-t-lg border-b border-b-slate-800 bg-pink-800 font-normal relative'>Address 1
                                                <HiOutlinePencilAlt onClick={editAddress} className='absolute top-3 right-3 text-lg cursor-pointer hover:scale-110 transition' title='Edit' />
                                            </div>
                                            <p className='p-4 pb-0 flex items-start gap-2  '> <div className='bg-slate-300 p-1.5 rounded-full'><FaLocationDot className="p-[0.5px] text-sm text-black" /></div> 203, Sysinsight Dighi, Pune asidasiodasod asdiasduasd apodas </p>
                                            <p className='p-4 flex items-center gap-2  '> <div className='bg-slate-300 p-1.5 rounded-full'><FaPhone className="p-[0.5px] text-sm text-black" /></div> 1234567890</p>
                                        </div>
                                        {
                                            isEditAddress && <div className="bg-black/80 md:pt-10 lg:pt-32 scrollbar-div h-[100vh] overflow-auto fixed inset-0 flex justify-center items-center z-[999] backdrop-blur-[3px]">
                                                <div className="w-[100%] m-6 md:w-[70%] lg:w-[40%] h-auto rounded shadow-xl shadow-slate-950 relative bg-white/30 backdrop-blur">
                                                    <IoClose
                                                        onClick={editAddress}
                                                        className="text-white text-2xl absolute -top-2 -right-2 z-[99999] cursor-pointer bg-red-700 rounded hover:scale-110"
                                                    />
                                                    <div className="text-left text-xl font-semibold text-white px-6 py-3 border-b border-slate-800">Change Address</div>
                                                    <div className="text-left py-4 px-6">
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">Building</label>
                                                            <input
                                                                type="text"
                                                                value="203, ABC Aprtment"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">Area</label>
                                                            <input
                                                                type="text"
                                                                value="Dighi"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">State</label>
                                                            <input
                                                                type="text"
                                                                value="Maharashtra"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">City</label>
                                                            <input
                                                                type="text"
                                                                value="Pune"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">ZIP Code</label>
                                                            <input
                                                                type="text"
                                                                value="123456"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                            <label className="mb-1 text-[14px]">Mobile No.</label>
                                                            <input
                                                                type="text"
                                                                value="1234567890"
                                                                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                            />
                                                        </div>
                                                        <div className="flex justify-center">
                                                            <button className="w-fit px-14 py-1.5 md:py-2 lg:py-2 mt-2 mb-2 md:mb-3 lg:mb-3 rounded-lg bg-slate-300 hover:bg-white outline-none text-black font-semibold">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>


                                </div>
                                }
                                {activeTab === 'Orders' && <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4' >
                                    <div onClick={viewOrderDetails} title={'View Details'} className='text-white bg-gray-400/10 relative border border-slate-900 rounded cursor-pointer group hover:bg-gray-400/20 hover:scale-105 transition duration-200' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">
                                        <div className="p-4 mx-6 mt-5 mb-3 bg-slate-950/50 rounded-full w-fit"><BsBagFill className='text-2xl transition group-hover:scale-110 ' /></div>
                                        <div className=''>
                                            <div className='flex px-6 items-center justify-between'>Order No : <div className='text-lg font-normal'>ORD123456</div></div>
                                            <div className='flex px-6 items-center justify-between'>Amount : <div className='text-lg font-normal'>₹598.00</div></div>
                                            <div className='flex px-6 items-center justify-between '>Order Date : <div className='text-lg font-normal'>10 June 2025</div></div>
                                            <div className='text-xs w-fit font-semibold text-yellow-600 border border-yellow-600 py-0.5 mt-3 ms-auto me-6 px-4 rounded absolute bottom-3.5 right-0 '>Pending</div>
                                            <div className="my-3 pt-3 px-6 border border-t-2 border-t-slate-700 border-transparent group-hover:underline ">View Details</div>
                                        </div>
                                    </div>
                                    <div onClick={viewOrderDetails} title={'View Details'} className='text-white bg-gray-400/10 relative border border-slate-900 rounded cursor-pointer group hover:bg-gray-400/20 hover:scale-105 transition duration-200' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">
                                        <div className="p-4 mx-6 mt-5 mb-3 bg-slate-950/50 rounded-full w-fit"><BsBagFill className='text-2xl transition group-hover:scale-110 ' /></div>
                                        <div className=''>
                                            <div className='flex px-6 items-center justify-between'>Order No : <div className='text-lg font-normal'>ORD123456</div></div>
                                            <div className='flex px-6 items-center justify-between'>Amount : <div className='text-lg font-normal'>₹598.00</div></div>
                                            <div className='flex px-6 items-center justify-between '>Order Date : <div className='text-lg font-normal'>10 June 2025</div></div>
                                            <div className='text-xs w-fit font-semibold text-green-600 border border-green-600 py-0.5 mt-3 ms-auto me-6 px-4 rounded absolute bottom-3.5 right-0 '>Completed</div>
                                            <div className="my-3 pt-3 px-6 border border-t-2 border-t-slate-700 border-transparent group-hover:underline ">View Details</div>
                                        </div>
                                    </div>
                                    <div onClick={viewOrderDetails} title={'View Details'} className='text-white bg-gray-400/10 relative border border-slate-900 rounded cursor-pointer group hover:bg-gray-400/20 hover:scale-105 transition duration-200' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">
                                        <div className="p-4 mx-6 mt-5 mb-3 bg-slate-950/50 rounded-full w-fit"><BsBagFill className='text-2xl transition group-hover:scale-110 ' /></div>
                                        <div className=''>
                                            <div className='flex px-6 items-center justify-between'>Order No : <div className='text-lg font-normal'>ORD123456</div></div>
                                            <div className='flex px-6 items-center justify-between'>Amount : <div className='text-lg font-normal'>₹598.00</div></div>
                                            <div className='flex px-6 items-center justify-between '>Order Date : <div className='text-lg font-normal'>10 June 2025</div></div>
                                            <div className='text-xs w-fit font-semibold text-red-600 border border-red-600 py-0.5 mt-3 ms-auto me-6 px-4 rounded absolute bottom-3.5 right-0 '>Cancelled</div>
                                            <div className="my-3 pt-3 px-6 border border-t-2 border-t-slate-700 border-transparent group-hover:underline ">View Details</div>
                                        </div>
                                    </div>
                                    {
                                        isOrderOpen &&
                                        <div className="bg-black/80 fixed inset-0 pt-16 md:pt-10 lg:pt-10 flex justify-center items-center z-[999] backdrop-blur-[2px]">
                                            <div className="w-[100%] m-5 md:w-[70%] lg:w-[60%] h-auto rounded shadow-xl shadow-slate-950 relative bg-white/30 backdrop-blur">
                                                <IoClose
                                                    onClick={viewOrderDetails}
                                                    className="text-white text-2xl absolute -top-2 -right-2 z-[99999] cursor-pointer bg-red-700 rounded hover:scale-110"
                                                />
                                                <div className="text-left text-xl font-semibold text-white px-3 md:px-6 lg:px-6 py-3 border-b border-slate-800 flex flex-col md:flex-row lg:flex-row justify-between items-start"><div className=''>Order Details <span className='text-green-500 text-[14px]'>( ORD123456 )</span></div><span className='float-end text-[13px] font-normal text-slate-300'>Date : 10 June 2025</span></div>
                                                <div className="overflow-auto scrollbar-div max-h-[350px] md:max-h-[350px] lg:max-h-[350px] text-left py-2 md:py-4 lg:py-4 px-3 md:px-6 lg:px-6 lg:pr-3">
                                                    <div className=''>
                                                        <Link to={'/product-view'} className='grid grid-cols-5 items-center border bg-slate-900 border-slate-800 group rounded-lg my-2'>
                                                            <div className='col-span-1 p-1 md:p-2 lg:p-2 flex justify-center'>
                                                                <img src="../assets/img/robot-1.png" alt="" className='w-24 h-16 object-contain' />
                                                            </div>
                                                            <div className='col-span-4 p-2 text-slate-300'>
                                                                <p className='lg:text-lg text-base font-semibold mb-1 group-hover:underline'>Caretaker Robot</p>
                                                                <p className='text-sm line-clamp-2 mb-1 overflow-hidden'>Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.</p>
                                                                <p className='text-sm font-normal '>Qty : 3</p>
                                                            </div>
                                                        </Link>
                                                        <Link to={'/product-view'} className='grid grid-cols-5 items-center border bg-slate-900 border-slate-800 group rounded-lg my-2'>
                                                            <div className='col-span-1 p-1 md:p-2 lg:p-2 flex justify-center'>
                                                                <img src="../assets/img/robot-2.png" alt="" className='w-24 h-16 object-contain' />
                                                            </div>
                                                            <div className='col-span-4 p-2 text-slate-300'>
                                                                <p className='lg:text-lg text-base font-semibold mb-1 group-hover:underline'>Laser security system</p>
                                                                <p className='text-sm line-clamp-2 mb-1 overflow-hidden'>Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.</p>
                                                                <p className='text-sm font-normal '>Qty : 1</p>
                                                            </div>
                                                        </Link>
                                                        <Link to={'/product-view'} className='grid grid-cols-5 items-center border bg-slate-900 border-slate-800 group rounded-lg my-2'>
                                                            <div className='col-span-1 p-1 md:p-2 lg:p-2 flex justify-center'>
                                                                <img src="../assets/img/robot-2-2.png" alt="" className='w-24 h-16 object-contain' />
                                                            </div>
                                                            <div className='col-span-4 p-2 text-slate-300'>
                                                                <p className='lg:text-lg text-base font-semibold mb-1 group-hover:underline'>Fire detection alarm</p>
                                                                <p className='text-sm line-clamp-2 mb-1 overflow-hidden'>Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.</p>
                                                                <p className='text-sm font-normal '>Qty : 1</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className=''>
                                                        <p className='text-sm my-2 lg:my-0 md:my-0'>Products added</p>
                                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-4'>
                                                            <div className='grid grid-cols-5 items-center bg-zinc-800 border border-zinc-600 rounded-lg md:my-2 lg:my-2'>
                                                                <div className='col-span-1 p-1 flex justify-center'>
                                                                    <img src="../assets/img/robot-1.png" alt="" className='w-24 h-16 object-contain' />
                                                                </div>
                                                                <div className='col-span-4 p-2 text-slate-300'>
                                                                    <p className='text-sm line-clamp-2 mb-1 overflow-hidden'>Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.</p>
                                                                    <p className='text-sm font-normal '>Qty : 2</p>
                                                                </div>
                                                            </div>
                                                            <div className='grid grid-cols-5 items-center bg-zinc-800 border border-zinc-600 rounded-lg md:my-2 lg:my-2'>
                                                                <div className='col-span-1 p-1 flex justify-center'>
                                                                    <img src="../assets/img/robot-1.png" alt="" className='w-24 h-16 object-contain' />
                                                                </div>
                                                                <div className='col-span-4 p-2 text-slate-300'>
                                                                    <p className='text-sm line-clamp-2 mb-1 overflow-hidden'>Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.</p>
                                                                    <p className='text-sm font-normal '>Qty : 1</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex justify-between flex-col md:flex-row lg:flex-row gap-3 bg-orange-950 border-t border-t-slate-500 px-6 py-3 '>
                                                    <p className='flex gap-3 flex-col md:items-start lg:items-start'><div className='flex gap-2 '>Payment : ₹598.00 <span className='text-white rounded-full text-xs font-normal px-3 border border-green-800 py-1 bg-green-600'>Online</span></div>
                                                        <Link className='text-sm flex items-center gap-2 bg-slate-300 hover:bg-white text-black rounded-lg p-3 py-1 font-semibold w-fit ' download>Download Invoice <FaFileDownload /></Link>
                                                    </p>
                                                    <p className=''>Coupon Code Used : <span className='font-normal text-yellow-500 border border-yellow-900 px-3 py-1 rounded-lg'>#QWERTY</span></p></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
        />
    )
}

export default Profile
