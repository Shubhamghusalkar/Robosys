import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import UIBody from '../../../Component/UI/UIBody';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);
    return (
        <UIBody content={
            <section className="contactUs pt-24">
                <div className="" >
                    <div className="grid grid-cols-2 px-10 text-white py-10">
                        <div className="col-span-1 ps-8">
                            <div className="text-4xl font-semibold">Contact Us<span className='text-pink-700'>.</span></div>

                            <div className='border-l-8 border-l-pink-700 ps-7 mt-10 py-2'>
                                <div className="w-[50%] pb-10 text-xl">
                                    <div className="text-lg text-pink-600/70 font-semibold pb-2"  data-aos="fade-right" data-aos-offset="50"  data-aos-duration="500">Address</div>
                                    <p data-aos="fade-right" data-aos-offset="50" data-aos-duration="600">Office no 204 Shree Ganesh Galaxy, Alandi Road
                                        Wadmukhwadi, Pune. PinCode - 411081
                                        Pune</p>
                                </div>
                                <div className="pb-10 text-xl">
                                    <div className="text-lg text-pink-600/70 font-semibold pb-2" data-aos="fade-right" data-aos-offset="50"  data-aos-duration="500">Contact </div>
                                    <div className='flex flex-col gap-2'>
                                        <a href="tel:+919860491861" data-aos="fade-right" data-aos-offset="50"  data-aos-duration="600">+91-9860491861</a>
                                        <a href="tel:+919834143101" data-aos="fade-right" data-aos-offset="50"  data-aos-duration="700">+919834143101</a>
                                        <a href="mailto:robotics@sysinsightsolutions.com" data-aos="fade-right" data-aos-offset="50"  data-aos-duration="800">robotics@sysinsightsolutions.com</a>
                                    </div>
                                </div>
                                <div className="flex space-x-4 text-lg pb-4">
                                    <a href="#"><FaFacebookF className="text-gray-300 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-offset="50"  data-aos-duration="700"/></a>
                                    <a href="#"><FaLinkedinIn className="text-gray-300 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-offset="50"  data-aos-duration="800" /></a>
                                    <a href="#"><FaInstagram className="text-gray-300 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-offset="50"  data-aos-duration="900" /></a>
                                    <a href="#"><FaXTwitter className="text-gray-300 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-offset="50"  data-aos-duration="1050" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative pb-0.5 mr-8" data-aos="fade-left" data-aos-offset="50"  data-aos-duration="500">

                                <div className='flex items-center flex-col -translate-y-5'>
                                    <div className="text-center text-2xl font-normal  cursor-pointer">Need Help?</div>
                                    <p className='text-sm text-center  w-[50%]'>We’ll get back to you as soon as possible.</p>
                                </div>
                                <div className='after:absolute after:left-0 after:top-0 after:bg-pink-700 after:h-80 after:w-1.5 before:absolute before:left-0 before:top-0 before:bg-pink-700 before:h-1.5 before:w-28'></div>
                                <div className='after:absolute after:right-0 after:top-0 after:bg-pink-700 after:h-28 after:w-1.5 before:absolute before:right-0 before:top-0 before:bg-pink-700 before:h-1.5 before:w-28'></div>
                                <div className='after:absolute after:left-0 after:bottom-0 after:bg-pink-700 after:h-28 after:w-1.5 before:absolute before:left-0 before:bottom-0 before:bg-pink-700 before:h-1.5 before:w-28'></div>
                                <div className='after:absolute after:right-0 after:bottom-0 after:bg-pink-700 after:h-80 after:w-1.5 before:absolute before:right-0 before:bottom-0 before:bg-pink-700 before:h-1.5 before:w-28'></div>

                                <div className='m-10 -mt-3 p-10 bg-slate-950 rounded'>
                                    <div className='grid grid-cols-2 gap-10'>
                                        <div className="flex flex-col gap-1 mb-7">
                                            <label className='text-sm '>First Name</label>
                                            <input id="" name="" type="text" className='bg-transparent placeholder:text-slate-500 border border-transparent focus:border-pink-700 py-2 px-3 rounded border-b-slate-200 outline-none focus:border-b-pink-700' placeholder="Enter Your First Name" />
                                        </div>
                                        <div className="flex flex-col gap-1 mb-7">
                                            <label className='text-sm '>Last Name</label>
                                            <input id="" name="" type="text" className='bg-transparent placeholder:text-slate-500 border border-transparent focus:border-pink-700 py-2 px-3 rounded border-b-slate-200 outline-none focus:border-b-pink-700' placeholder="Enter Your Last Name" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 mb-7">
                                        <label className='text-sm '>Email ID</label>
                                        <input id="" name="" type="text" className='bg-transparent placeholder:text-slate-500 border border-transparent focus:border-pink-700 py-2 px-3 rounded border-b-slate-200 outline-none focus:border-b-pink-700' placeholder="Enter Your Email ID" />
                                    </div>
                                    <div className='grid grid-cols-2 gap-10'>
                                        <div className="flex flex-col gap-1 mb-7">
                                            <label className='text-sm '>Mobile No.</label>
                                            <input id="" name="" type="text" className='bg-transparent placeholder:text-slate-500 border border-transparent focus:border-pink-700 py-2 px-3 rounded border-b-slate-200 outline-none focus:border-b-pink-700' placeholder="Enter Your Mobile No." />
                                        </div>
                                        <div className="flex flex-col gap-1 mb-7">
                                            <label className='text-sm '>Type</label>
                                            <select className="bg-transparent placeholder:text-slate-500 border border-transparent focus:border-pink-700 py-1.5 cursor-pointer px-2 border-b-slate-200 outline-none focus:border-b-pink-700">
                                                <option className='bg-slate-900 ' selected>Select Type</option>
                                                <option className='bg-slate-900 '>Project</option>
                                                <option className='bg-slate-900 '>Program</option>
                                                <option className='bg-slate-900 '>Robotic</option>
                                                <option className='bg-slate-900 '>Kids</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 mb-7">
                                        <label className='text-sm '>Description</label>
                                        <textarea id="" name="" type="text" rows={3} className='bg-transparent placeholder:text-slate-500 py-2 px-3 rounded border-b border-slate-200 outline-none focus:border-b-pink-700' placeholder="Write your message here..." ></textarea>
                                    </div>
                                    <button type="button" className='bg-pink-700 hover:bg-pink-600 py-2 px-10 rounded'>Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="mt-10 border-y-2 border-y-slate-900/10" data-aos="fade-down" data-aos-offset="50"  data-aos-duration="500">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.345101759912!2d73.87726587410314!3d18.648503665256026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7c849a5d491%3A0x572e5adf0bb7e62d!2sShree%20Ganesh%20Galaxy!5e0!3m2!1sen!2sin!4v1687770837234!5m2!1sen!2sin" width="100%" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Sysinsight Soluation" style={{ border: '0px' }}></iframe>
                    </div>
                </div>
            </section>
        }
        />
    )
}

export default Contact