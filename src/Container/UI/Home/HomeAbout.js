import React from 'react'
import UIBody from '../../../Component/UI/UIBody'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";



const HomeAbout = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
    return (
        <section className='homeAbout px-10 py-20  flex justify-center flex-wrap md:flex-nowrap gap-5 border-b-2 border-slate-700' >
            <div className='flex mr-0 items-center lg:mr-40  order-2 md:order-1' >
                <div className='border-r-2 border-slate-700  pr-5 md:pr-5 lg:pr-10 text-center' >
                    <h6 className='text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-3 ' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">1.2k</h6>
                    <p className='text-xl text-slate-400 md:text-nowrap' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="700">Happy Clients</p>
                </div>
                <div className='pl-5 md:pl-5 lg:pl-10 text-center' >
                    <h6 className='text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-3 ' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="700">200</h6>
                    <p className='text-xl text-slate-400 md:text-nowrap' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="800">Unique Models</p>
                </div>
            </div>
            <div className='flex flex-col order-1 md:order-2 md:pl-10' >
                <span className='text-[color:#e91e63] text-xl mb-3 font-normal' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="700">About Us</span>
                <p className='max-w-96 text-slate-400' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="800">We design smart home assistant robots that combine innovation, practicality, and elegance. Our products make managing your household simpler and more efficient.</p>
            </div>
        </section>
    )
}

export default HomeAbout
