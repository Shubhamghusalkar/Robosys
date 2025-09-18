import UIBody from '../../../Component/UI/UIBody';
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from 'react'
import AOS from "aos";

const AboutUs = () => {
    useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);

    const [activeTab, setActiveTab] = useState('Educational & Inspiring');
    
    return (
        <UIBody content={
            <section className="aboutUs">
                <div className='pageBanner  h-[450px] bg-no-repeat relative text-white bg-cover bg-fixed flex flex-col gap-3 items-center justify-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-reparation-circuit-board_23-2148419196.jpg?t=st=1754643464~exp=1754647064~hmac=59f2f9e2228c4388038c31259ccec43e682d4e966b621efa364c78a9b31194c2&w=1060')" }}>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-center w-[70%] relative z-10 pt-16 font-normal' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500">About <b className='text-[color:#e91e63]' >Us</b></p>
                    <p className='text-lg md:text-md text-center w-[100%] md:w-[50%] relative z-10 pt-2' data-aos="fade-up" data-aos-offset="200"  data-aos-duration="600">Passionate minds working together to create meaningful impact.</p>
                    <div className='absolute inset-0 bg-gradient-to-b -bottom-5 md:-bottom-2 lg:bottom-0 from-black/95 to-slate-900/90 '></div>
                    <div className='w-full text-center mt-4' data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700">
                        <div className="relative inline-block group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <Link to={'/products'} className="w-full flex relative z-10 px-6 py-2 md:py-2 lg:py-3 bg-white rounded-full shadow-md transition-all duration-300">
                                <span className="flex items-center gap-1 text-black font-medium">
                                    Shop Now <IoMdArrowRoundForward className="text-black text-bold" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 p-16 mx-16 rounded-xl items-center bg-slate-950/80 border border-slate-800/60 backdrop-blur-lg  -translate-y-10 text-white'>
                    <p className='text-3xl font-semibold' data-aos="fade-up"   data-aos-duration="800">Tapping Intelligence Through Talent</p>
                    <p className='col-span-2' data-aos="fade-up"   data-aos-duration="900">We design innovative robotic kits that make learning technology fun, hands-on, and accessible.
                        Our mission is to empower young minds to explore creativity, problem-solving, and real-world innovation.</p>
                </div>
                <div className='grid grid-cols-5 gap-4 mx-16 my-10'>
                    <div className='col-span-2 p-10' data-aos="fade-right" data-aos-offset="200"  data-aos-duration="700">
                        <img src='https://www.sysinsightsolutions.com/images/ui/robotic-lab/banner-image.png' alt="About Img" className='-scale-x-[1]' />
                    </div>
                    <div className="col-span-3 ps-14" data-aos="fade-left" data-aos-offset="200"  data-aos-duration="700">
                        <div className="tabs-container py-5">
                            <div className="text-4xl font-semibold text-white mb-3">About Us<span className='text-pink-700'>.</span></div>
                            <p className='text-white'>From a simple idea to empowering young minds, we create robotic kits that blend fun with learning. Every kit is designed to unlock talent, curiosity, and a passion for technology. We design hands-on robotic kits that make learning simple, exciting, and impactful. Through innovation, we help turn curiosity into real-world skills.</p>
                            <div className="tab-buttons flex justify-start gap-4  w-full text-white">
                                <button
                                    className={activeTab === 'Educational & Inspiring' ? 'active relative scale-105 px-10 py-1.5 my-5 bg-slate-400 text-black font-semibold after:absolute after:-bottom-1.5 after:right-[45%] rounded after:h-3 after:w-3  after:rotate-45 after:bg-slate-400' : ' border border-transparent hover:border-slate-600 rounded my-5 px-10 py-1.5 bg-slate-700 scale-100 hover:scale-105'}
                                    onClick={() => setActiveTab('Educational & Inspiring')}
                                >
                                    Educational & Inspiring
                                </button>
                                <button
                                    className={activeTab === 'Vision & Mission' ? 'active relative scale-105 px-10 py-1.5 my-5 bg-slate-400 text-black font-semibold after:absolute after:-bottom-1.5 after:right-[45%] rounded after:h-3 after:w-3 after:rotate-45 after:bg-slate-400' : 'border border-transparent hover:border-slate-600 rounded my-5 px-10 py-1.5 bg-slate-700 scale-100 hover:scale-105'}
                                    onClick={() => setActiveTab('Vision & Mission')}
                                >
                                    Vision & Mission
                                </button>
                                <button
                                    className={activeTab === 'Storytelling' ? 'active relative scale-105 px-10 py-1.5 my-5 bg-slate-400 text-black font-semibold after:absolute after:-bottom-1.5 after:right-[45%] rounded after:h-3 after:w-3 after:rotate-45 after:bg-slate-400' : 'border border-transparent hover:border-slate-600 rounded my-5 px-10 py-1.5 bg-slate-700 scale-100 hover:scale-105'}
                                    onClick={() => setActiveTab('Storytelling')}
                                >
                                    Storytelling
                                </button>
                            </div>
                        </div>
                        <div className="tab-content text-white">
                            {activeTab === 'Educational & Inspiring' && <div className="flex gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap" >

                                <div className="" data-aos="fade-up" data-aos-offset="200"  data-aos-duration="600">
                                    <img src="https://img.freepik.com/free-vector/colorful-education-concept-with-flat-design_23-2147912517.jpg?t=st=1755843856~exp=1755847456~hmac=b4538525852363bd4c31410a8e9a4a08da47733b7fa25c09d8afb26b83e16aa2&w=1060" alt="Educational & Inspiring" className='w-full rounded-lg h-full object-cover' />
                                </div>
                                <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700">We believe that learning should be exciting, practical, and future-focused. Our robotic kits are designed to inspire creativity, critical thinking, and problem-solving skills in learners of all ages. By combining technology with talent, we make robotics simple, hands-on, and accessible, helping the next generation of innovators build confidence and curiosity in science and engineering.</p>
                            </div>
                            }
                            {activeTab === 'Vision & Mission' && <div className="flex gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap">
                                <div className="" data-aos="fade-up" data-aos-offset="200"  data-aos-duration="600">
                                    <img src="https://img.freepik.com/free-vector/realistic-objective-background_79603-1821.jpg?t=st=1755845725~exp=1755849325~hmac=94596d9f25466c6afd74791ef3966fc7ebba7f09bcee816535be4a106324904e&w=1060" alt="Educational & Inspiring" className='w-full rounded-lg h-full object-cover' />
                                </div>
                                <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700">At the core of our mission lies a commitment to empower young minds through innovation. Our robotic kits go beyond just components — they are carefully designed learning experiences that bring imagination to life. With every project, we aim to make complex concepts simple, foster curiosity, and prepare learners with the skills needed to thrive in a technology-driven world.</p>
                            </div>
                            }
                            {activeTab === 'Storytelling' && <div className="flex gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap">
                                <div className="" data-aos="fade-up" data-aos-offset="200"  data-aos-duration="600">
                                    <img src="https://img.freepik.com/free-vector/happy-businessman-with-statistic_23-2147618128.jpg?t=st=1755846064~exp=1755849664~hmac=d46af817f11805caa7eaa92fb33bd16f0997ff930063d47b4be99f9af16420f6&w=1060" alt="Educational & Inspiring" className='w-full rounded-lg h-full object-cover' />
                                </div>
                                <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700">From humble beginnings, we set out with one vision: to make robotics education engaging, practical, and inspiring. Today, our robotic kits are used to teach problem-solving, coding, and engineering in a way that feels less like homework and more like exploration. We are passionate about bridging the gap between creativity and technology, giving every learner the tools to innovate, build, and shape the future.</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='h-[300px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center bg-bottom' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/home-made-robot-desk_23-2148863420.jpg?t=st=1755850134~exp=1755853734~hmac=e6e4c13f8192cb222773a7c7b5917f05d779ed097ec7bca5b2e7ff8bd4c18b2e&w=1060')" }}>
                    <div className='absolute inset-0 bg-black/90 -bottom-5 md:-bottom-2 lg:bottom-0  '></div>
                    <div className='grid grid-cols-4 gap-16 text-white relative z-10'>
                        <div className='border border-slate-200 px-12 py-6 text-center rounded bg-white/5 backdrop-blur-sm' data-aos="fade-right" data-aos-offset="200"  data-aos-duration="400">
                            <span className='text-5xl font-semibold'>507 +</span>
                            <p className='pt-2'>Sessions Conducted</p>
                        </div>
                        <div className='border border-slate-200 px-12 py-6 text-center rounded bg-white/5 backdrop-blur-sm' data-aos="fade-right" data-aos-offset="200"  data-aos-duration="600">
                            <span className='text-5xl font-semibold'>37 +</span>
                            <p className='pt-2'>Industry Experts</p>
                        </div>
                        <div className='border border-slate-200 px-12 py-6 text-center rounded bg-white/5 backdrop-blur-sm' data-aos="fade-right" data-aos-offset="200"  data-aos-duration="800">
                            <span className='text-5xl font-semibold'>748 +</span>
                            <p className='pt-2'>Got Internship</p>
                        </div>
                        <div className='border border-slate-200 px-12 py-6 text-center rounded bg-white/5 backdrop-blur-sm' data-aos="fade-right" data-aos-offset="200"  data-aos-duration="1000">
                            <span className='text-5xl font-semibold'>3.7k +</span>
                            <p className='pt-2'>Student Trained</p>
                        </div>
                    </div>
                </div>
            </section>
        }
        />
    )
}

export default AboutUs