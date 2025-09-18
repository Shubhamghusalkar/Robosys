import UIBody from "../../../Component/UI/UIBody"
import { Link } from "react-router-dom"
import { FaFileDownload } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaHome } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const CourseView = () => {
    useEffect(() => {
            AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
          }, []);
    const brands = [
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-goi.webp'
        },
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-maharashtra.webp'
        },
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-amazon.webp'
        },
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-flipkart.webp'
        },
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-intel.webp'
        },
        {
            brandImg: 'https://images.avishkaar.cc/misc/home/partners/partners-next.webp'
        },
    ];
    return (
        <UIBody
            content={
                <div className="corseView pt-24">
                    <div className='flex items-center gap-4 ps-5 md:ps-14 pb-5 text-slate-300 font-medium' >
                        <Link to={'/'} className='flex items-center gap-2'><FaHome /> Home</Link> <span><MdOutlineDoubleArrow /></span>
                        <Link to={'/courses'} >Courses</Link>
                    </div>
                    {/* <div className='pageBanner h-[450px] bg-no-repeat relative text-white bg-cover bg-fixed flex flex-col gap-3 items-center justify-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-reparation-circuit-board_23-2148419196.jpg?t=st=1754643464~exp=1754647064~hmac=59f2f9e2228c4388038c31259ccec43e682d4e966b621efa364c78a9b31194c2&w=1060')" }}>
                        <p className='text-3xl md:text-4xl lg:text-5xl text-center w-[70%] relative z-10 pt-16'>Where <b className='text-[color:#e91e63]'>Innovation </b>Meets <b className='text-[color:#e91e63]'>Automation</b>.</p>
                        <p className='text-lg md:text-md text-center w-[100%] md:w-[50%] relative z-10 pt-2'>Discover high-quality RoBoSyS kits and components to build, program, and innovate.</p>
                        <div className='absolute inset-0 bg-gradient-to-b -bottom-5 md:-bottom-2 lg:bottom-0 from-black/95 to-slate-900/90 '></div>
                    </div> */}
                    <div className="pb-10 px-5 md:px-5 lg:px-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white">
                        <div className="col-span-1 h-full w-full relative" data-aos="fade-right" data-aos-offset="50"  data-aos-duration="500">
                            <img src="https://img.freepik.com/free-photo/father-son-making-robot_23-2148863353.jpg?t=st=1756122540~exp=1756126140~hmac=cc19774e627e1585ab104404edde1f021c826d121159cf53b6fb3a81b8ae686d&w=1060" alt="" className='object-cover w-full rounded h-[450px]' />
                            <span className="absolute top-8 right-0 bg-pink-700 ps-5 pe-2 py-2 text-white text-base md:text-xl lg:text-xl font-normal rounded-l-full">8+ ages</span>
                        </div>
                        <div className="col-span-1 ps-0 md:ps-2 lg:ps-10 mt-6 md:mt-6 lg:mt-0" data-aos="fade-left" data-aos-offset="50"  data-aos-duration="500">
                            <div className="text-2xl mb-3 font-normal">Robotics Microdegree - advanced</div>
                            <p className="pb-3 text-slate-300">As you develop a liking for robotics, Advanced Microdegree introduces complex machines and problem solving to build utility robots, complex autonomous smart robots.</p>
                            <p className="mb-3">India's Best Course in Robotics & Coding</p>
                            <ul className="list-disc ps-5 text-slate-300">
                                <li>Learn robotics, coding, construction, mechanical design, creativity and problem solving</li>
                                <li>For ages 8 and above</li>
                                <li>Free access to Avishkaar LMS</li>
                                <li>Free access to Avishkaar Maker studio</li>
                            </ul>

                            <div className="flex flex-wrap gap-3 my-4">
                                <div className="flex gap-3 items-center bg-slate-800 ps-3 pe-5 py-2 rounded-full border border-slate-700">
                                    <span className="bg-pink-800 h-9 flex items-center justify-center font-semibold w-10 rounded-full">3</span> Course Certificates
                                </div>
                                <div className="flex gap-3 items-center bg-slate-800 ps-3 pe-5 py-2 rounded-full border border-slate-700">
                                    <span className="bg-pink-800 h-9 flex items-center justify-center font-semibold w-10 rounded-full">1</span> Robotics PRO Kit
                                </div>
                                <div className="flex gap-3 items-center bg-slate-800 ps-3 pe-5 py-2 rounded-full border border-slate-700">
                                    <span className="bg-pink-800 h-9 flex items-center justify-center font-semibold w-10 rounded-full">24</span> Live Online Classes
                                </div>
                                <div className="flex gap-3 items-center bg-slate-800 ps-3 pe-5 py-2 rounded-full border border-slate-700">
                                    <span className="bg-pink-800 h-9 flex items-center justify-center font-semibold w-10 rounded-full">20</span> Independent Projects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-8 md:my-10 lg:my-16 grid grid-cols-8 gap-4 p-10 md:p-10 lg:p-16 mx-6 md:mx-16 lg:mx-16 rounded-xl items-center bg-slate-950/80 backdrop-blur-lg text-white group' data-aos="fade-up" data-aos-offset="50"  data-aos-duration="500">
                        <span className='text-3xl col-span-8 md:col-span-1 lg:col-span-1 font-semibold bg-slate-700 w-fit p-5 rounded-full group-hover:scale-110 transition-all'><FaFileDownload /></span>
                        <div className="col-span-8 md:col-span-7 md:ps-10 lg:ps-0 lg:col-span-7">
                            <p className='pb-2 text-xl'>Get complete details about our courses, curriculum, and learning journey.
                                Download the brochure to explore everything at a glance.</p>
                            <a href="#" download className="underline group-hover:scale-110 transition-all">Download the brochure for full course details.</a>
                        </div>
                    </div>
                    <div className="coursesBrand px-9 py-10 mb-5 md:mb-0">
                        <h4 className='text-4xl pb-5 text-white font-medium text-center' data-aos="fade-up" data-aos-offset="50"  data-aos-duration="500">Trusted by Renowned Institutions</h4>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={'true'}
                            autoplay={{
                                delay: 1500
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                }
                            }}
                            modules={[Autoplay]}
                            className="mySwiper my-10"
                        >
                            {
                                brands.map((brands) => (
                                    <SwiperSlide className='flex justify-center'>
                                        <img src={`${brands.brandImg}`} alt="" className='object-contain h-16 w-full shadow-lg hover:scale-90 transition-all' data-aos="fade-up" data-aos-offset="50"  data-aos-duration="500" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    
                </div>
            }
        />
    )
}

export default CourseView;