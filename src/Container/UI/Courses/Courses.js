import UIBody from "../../../Component/UI/UIBody";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GrDocumentText } from "react-icons/gr";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);
    

    const course = [
        {
            title: 'Robotics Starter Microdegree',
            desc: 'Does your kid love building with Meccano or Lego kits, get excited by robots, and enjoy hands-on activities? Or are they an absolute beginner in their tech journey? Robotics is their next creative step!',
            age: '4+',
            months: '2',
            projects: '7+',
            sessions: '28',
            img: 'keypad.jpg',
        },
        {
            title: 'Robotics Starter Microdegree',
            desc: 'Is your child curious about game development, gadgets, loves building projects, and amazed by sensors? IoT and electronics are their perfect playground!',
            age: '7+',
            months: '3',
            projects: '10+',
            sessions: '30',
            img: 'play.jpg',
        },
        {
            title: 'Artificial Intelligence Microdegree',
            desc: 'Does your child get excited about AI, thrive on solving puzzles, and have a keen interest in learning Python? Our coding course will help them unlock their tech potential!',
            age: '10+',
            months: '6',
            projects: '30+',
            sessions: '60',
            img: 'vr.jpg',
        },
    ];
    const [isBookOpen, setIsBookOpen] = useState(false);
    const buyCourse = () => {
        setIsBookOpen(!isBookOpen);
    }

    return (

        <UIBody
            content={
                <div className="coursesDiv">
                    <div className='pageBanner h-[450px] bg-no-repeat relative text-white bg-cover bg-fixed flex flex-col gap-3 items-center justify-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-reparation-circuit-board_23-2148419196.jpg?t=st=1754643464~exp=1754647064~hmac=59f2f9e2228c4388038c31259ccec43e682d4e966b621efa364c78a9b31194c2&w=1060')" }}>
                        <p className='text-3xl md:text-4xl lg:text-5xl text-center w-[70%] relative z-10 pt-16'  data-aos="fade-up" data-aos-offset="100"  data-aos-duration="500">Where <b className='text-[color:#e91e63]'>Innovation </b>Meets <b className='text-[color:#e91e63]'>Automation</b>.</p>
                        <p className='text-lg md:text-md text-center w-[100%] md:w-[50%] relative z-10 pt-2'  data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">Discover high-quality RoBoSyS kits and components to build, program, and innovate.</p>
                        <div className='absolute inset-0 bg-gradient-to-b -bottom-5 md:-bottom-2 lg:bottom-0 from-black/95 to-slate-900/90 '></div>
                    </div>
                    
                    <div className='coursesList py-10 px-5 md:px-5 lg:px-10 col-span-1 md:col-span-3 lg:col-span-4 grid-rows-2'>

                        <div className='flex flex-wrap md:flex-nowrap gap-3 md:gap-0 items-center justify-between mb-5'>
                            <div className='flex items-center justify-between relative w-full md:w-64 lg:w-96 mb-2'>
                                <input type='text' placeholder='Search..' className='bg-slate-800 rounded px-4 py-2 outline-none text-white w-full' />
                                <IoSearchSharp className='text-slate-300 ml-2 absolute right-3 top-3 -z-1 cursor-pointer' />
                            </div>
                            <div className='flex items-center flex-nowrap gap-2 text-white w-56'>Sort by
                                <select className='bg-slate-800 border border-slate-600 rounded px-2 py-1.5 outline-0 w-40'>
                                    <option className='text-sm' selected>Select</option>
                                    <option className='text-sm'>4th age</option>
                                    <option className='text-sm'>5th age</option>
                                    <option className='text-sm'>6th age</option>
                                    <option className='text-sm'>7th age</option>
                                    <option className='text-sm'>8th age</option>
                                    <option className='text-sm'>9th age</option>
                                    <option className='text-sm'>10th age</option>
                                </select>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5'>
                            {
                                course.map((course, index) => (
                                    <div className="grid grid-cols-5 items-center group"  data-aos="fade-up" data-aos-offset="50"  data-aos-duration="500">
                                        <div className="col-span-2 h-full overflow-hidden relative">
                                            <img src={`./assets/img/course/${course.img}`} alt="" className='object-cover h-full w-full shadow-lg group-hover:scale-105 transition-all group-hover:hidden' />
                                            <video
                                                width={1150}
                                                autoPlay
                                                loop
                                                muted
                                                poster="https://videocdn.cdnpk.net/videos/39841714-dbc7-4cb4-bbeb-43a1073a4b8a/horizontal/thumbnails/large.jpg?uid=R64933601&ga=GA1.1.1792968071.1749805956&item_id=475311"
                                                className=" absolute inset-0 h-full max-w-full overflow-hidden w-full object-cover group-hover:block hidden"
                                                aria-hidden="true"
                                            >
                                                <source
                                                    src="https://videocdn.cdnpk.net/videos/d57ce163-d795-488d-a973-b76e84790e7b/horizontal/previews/clear/large.mp4?token=exp=1756891566~hmac=b65b329b02ba4852bfc35bd798667ff4fa3f8474bf3db994dd7967fbf5c1226a"
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <div onClick={buyCourse} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                                px-5 py-2 rounded bg-black text-white text-sm font-medium text-nowrap
                                                opacity-0 group-hover:opacity-100 group-hover:scale-105 z-20
                                                transition-all duration-500 cursor-pointer">Buy Course</div>
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
                                        </div>

                                        <Link to={'/courses-view'} className="col-span-3 bg-slate-950 p-6">
                                            <div className="text-xl line-clamp-1 overflow-hidden mb-3 text-slate-200 group-hover:text-slate-100 hover:text-white">{course.title}</div>
                                            <p className="line-clamp-3 overflow-hidden mb-3 text-sm text-slate-400 group-hover:text-slate-300">{course.desc}</p>
                                            <div className="flex flex-wrap gap-2 items-center mb-3">
                                                <span className="relative text-xs flex gap-2 items-center pr-3 after:absolute after:h-3.5 after:w-[1px] after:bg-slate-600 after:right-0 text-slate-400 group-hover:text-slate-300">
                                                    <FaUser className="" />
                                                    {course.age} age
                                                </span>
                                                <span className="relative text-xs flex gap-2 items-center pr-3 after:absolute after:h-3.5 after:w-[1px] after:bg-slate-600 after:right-0 text-slate-400 group-hover:text-slate-300">
                                                    <SlCalender className="" />
                                                    {course.months} months
                                                </span>
                                                <span className="relative text-xs flex gap-2 items-center pr-3 after:absolute after:h-3.5 after:w-[1px] after:bg-slate-600 after:right-0 text-slate-400 group-hover:text-slate-300">
                                                    <GrDocumentText className="" />
                                                    {course.projects} Projects
                                                </span>
                                                <span className="relative text-xs flex gap-2 items-center pr-3 after:absolute after:h-3.5 after:w-[1px] after:bg-slate-600 after:right-0 text-slate-400 group-hover:text-slate-300">
                                                    <BsFillCameraVideoFill className="" />
                                                    {course.sessions} Sessions
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 group-hover:text-white flex gap-2 items-center cursor-pointer hover:rounded border border-slate-800 hover:bg-slate-800/35 w-fit px-2 py-1 hover:border-slate-400 transition-all">Read More <IoMdArrowRoundForward className="group-hover:text-white text-bold " /></p>
                                        </Link>
                                    </div>
                                ))
                            }
                            {
                                isBookOpen && <div className="bg-black/80 md:pt-10 lg:pt-10 fixed inset-0 flex justify-center items-center z-[999] backdrop-blur-[3px]">
                                    <div className="w-[100%] m-6 md:w-[70%] lg:w-[40%] h-auto rounded shadow-xl shadow-slate-950 relative bg-white/30 backdrop-blur">
                                        <IoClose
                                            onClick={buyCourse}
                                            className="text-white text-2xl absolute -top-2 -right-2 z-[99999] cursor-pointer bg-red-700 rounded hover:scale-110"
                                        />
                                        <div className="text-left text-xl font-semibold text-white px-6 py-3 border-b border-slate-800">Enter Details</div>
                                        <div className="overflow-auto scrollbar-div text-left py-4 px-6 text-white">
                                            <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                <label className="mb-1 text-[14px]">Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                />
                                            </div>
                                            <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                <label className="mb-1 text-[14px]">Email Id</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter email id"
                                                    className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                />
                                            </div>
                                            <div className="flex flex-col mb-3 md:mb-3 lg:mb-3">
                                                <label className="mb-1 text-[14px]">Mobile No.</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter mobile no"
                                                    className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white outline-none border focus:border-slate-400 border-transparent"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 ">
                                                <input
                                                    type="checkbox"
                                                    className="" id="connectWhatsApp"
                                                />
                                                <label className=" text-[14px] font-normal" for="connectWhatsApp">Connect with me on Whatsapp</label>
                                            </div>
                                            <div className="flex justify-center ">
                                                <button className="w-fit px-14 py-2 mt-2 mb-2 md:mb-3 lg:mb-3 rounded-lg bg-slate-300 hover:bg-white outline-none text-black font-semibold">
                                                    Buy Course
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        />

    )
}

export default Courses;