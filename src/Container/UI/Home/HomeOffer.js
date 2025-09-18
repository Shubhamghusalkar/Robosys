import React from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from "react-icons/io";

const HomeOffer = () => {
    return (
        <section className='homeOffers px-0 md:px-10 py-20 bg-cover bg-fixed bg-center relative bg-no-repeat' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-reparation-circuit-board_23-2148419196.jpg?t=st=1754643464~exp=1754647064~hmac=59f2f9e2228c4388038c31259ccec43e682d4e966b621efa364c78a9b31194c2&w=1060')" }}>
            <div className="absolute inset-0 bg-black/90 -top-0.5 -bottom-0.5 md:-top-1 md:-bottom-1 left-0 "></div>
            <div className='flex justify-center pb-4' >
                    <p className='text-3xl md:text-5xl lg:text-6xl font-medium text-white text-center relative z-50' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="700">Get up to <span className='text-pink-600 font-bold'>30% OFF</span> your <br /> perfect home assistant <br /> today!</p>
                </div>
                <div className='w-full text-center mt-1 flex justify-center' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="900">
                    <div className="relative  group mt-6 text-center w-fit flex items-center">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <Link to={'/'} className="relative z-10 px-6  py-2 md:py-2 lg:py-3  w-full bg-white rounded-full shadow-md transition-all duration-300">
                            <span className="flex items-center gap-1 text-black font-medium">
                                Claim Now <IoMdArrowRoundForward className="text-black text-bold" />
                            </span>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default HomeOffer
