import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import UIBody from '../../../Component/UI/UIBody';
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeBestSeller from '../Home/HomeBestSeller';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductView = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Reviews');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);
  const labels = ["Bad", "Nice", "Good", "Very Good", "Excellent"];
  const reviews = [
    {
      name: "Rutik Vyawhare",
      time: "6 month ago",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      images: [
        "../assets/img/robot-2-2.png",
        "../assets/img/robot-2-1.png",
        "../assets/img/robot-2.png",
      ],
    },
    {
      name: "Shubham Ghusalkar",
      time: "4 month ago",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      images: [],
    },
    {
      name: "Rutik Vyawhare",
      time: "6 month ago",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      images: [
        "../assets/img/robot-2-2.png",
        "../assets/img/robot-2-1.png",
        "../assets/img/robot-2.png",
      ],
    },
    {
      name: "Shubham Ghusalkar",
      time: "4 month ago",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      images: [],
    },
  ];
  const ratingsData = [
    { stars: 5, count: 53 },
    { stars: 4, count: 20 },
    { stars: 3, count: 12 },
    { stars: 2, count: 6 },
    { stars: 1, count: 2 }
  ];
  const maxCount = Math.max(...ratingsData.map(r => r.count));
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    AOS.init({
              duration: 800,
              easing: "ease-in-out", 
              once: false,
            });
  }, [hash]);
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the checkbox
    }));
  };
  const kitAdd = [
    {
      id: 1,
      kitText: 'Official Arduino UNO R4 Minima Made in India | 48 MHz Arm Cortex-M4 processor USB 2.0 USB-C UART SPI I2C CAN 256 kB Flash Memory 14 PIN GPIO.',
      kitPrice: '₹ 680'
    },
    {
      id: 2,
      kitText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      kitPrice: '₹ 499'
    },
    {
      id: 3,
      kitText: 'A Laser Security System is a simple project that uses a laser and LDR (light sensor) to detect if someone crosses the path. When the laser beam is interrupted, it triggers a buzzer to alert about an intruder.',
      kitPrice: '₹ 499'
    }
  ];
  return (
    <UIBody content={
      <section className='productView pb-0 md:pb-10 lg:pb-10 text-white relative pt-24'>
        <div className='flex items-center gap-4 ps-5 md:ps-14 pb-5 text-slate-300 font-medium' >
          <Link to={'/'} className='flex items-center gap-2'><FaHome /> Home</Link> <span><MdOutlineDoubleArrow /></span>
          <Link to={'/products'} >Products</Link>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 relative h-auto'>
            <div className='' >
              <div className='sticky top-20'>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 "
                >
                  <SwiperSlide className='px-16 py-10'>
                    <div className='flex justify-center' data-aos="fade-left" data-aos-offset="50"  data-aos-duration="500">
                      <img src="../assets/img/robot-2.png" className='w-96' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='px-16 py-10'>
                    <div className='flex justify-center' data-aos="fade-left" data-aos-offset="50"  data-aos-duration="500">
                      <img src="../assets/img/robot-2-1.png" className='w-96' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='px-16 py-10'>
                    <div className='flex justify-center' data-aos="fade-left" data-aos-offset="50"  data-aos-duration="500">
                      <img src="../assets/img/robot-2-2.png" className='w-96' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='px-16 py-10'>
                    <div className='flex justify-center h-full'>
                      <video style={{ height: '355px' }}
                        width={1150}
                        controls
                        controlsList="nodownload"
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="https://videocdn.cdnpk.net/videos/39841714-dbc7-4cb4-bbeb-43a1073a4b8a/horizontal/thumbnails/large.jpg?uid=R64933601&ga=GA1.1.1792968071.1749805956&item_id=475311"
                        className="absolute inset-0 h-full block max-w-full overflow-hidden w-full object-contain"
                        aria-hidden="true"
                      >
                        <source
                          src="https://videocdn.cdnpk.net/videos/39841714-dbc7-4cb4-bbeb-43a1073a4b8a/horizontal/previews/clear/large.mp4?token=exp=1755154696~hmac=2c7a95a89f117d94dc0c3375ecff0a9313f001f97609d350ec5470b4ad658a68"
                          type="video/mp4"
                        />
                      </video>
                      {/* <iframe width="700" height="275" src="https://www.youtube.com/embed/VhUvoV5XyRg?si=Sdu7LgJFXgwNJnuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  // centeredSlides={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide className=' bg-slate-800 hover:bg-[#00000054] cursor-pointer'>
                    <div className='flex justify-center px-2 py-1 lg:px-4 lg:py-3'>
                      <img src="../assets/img/robot-2.png" className='w-28' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-slate-800 hover:bg-[#00000054] cursor-pointer'>
                    <div className='flex justify-center px-2 py-1 lg:px-4 lg:py-3 '>
                      <img src="../assets/img/robot-2-1.png" className='w-28' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-slate-800 hover:bg-[#00000054] cursor-pointer'>
                    <div className='flex justify-center px-2 py-1 lg:px-4 lg:py-3 '>
                      <img src="../assets/img/robot-2-2.png" className='w-28' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-slate-800 hover:bg-[#00000054] cursor-pointer'>
                    <div className='flex justify-center px-2 py-1 lg:px-4 lg:py-3 '>
                      <img src="../assets/img/vdo-thumb.jpg" className='w-64' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="productsDesc mr-0 px-5 md:px-0 lg:px-0 md:mr-16 lg:mr-16">
              <h4 className='text-4xl font-medium pb-4 mt-5 px-5 md:px-7 lg:px-0'>Fire detection alarm</h4>
              <div className='text-[color:#e91e63] text-2xl font-sm px-5 md:px-6 lg:px-0 font-semibold'>₹499.00</div>
              <div className=' flex gap-3 mb-2'>
                <div className='flex items-center gap-2'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <Link to={'/product-view/#productReviews'} className='text-sm font-light text-slate-300'>
                  (53 customer reviews)
                </Link>
              </div>
              <div className='text-slate-300 py-1 mb-2 px-3 w-fit rounded-md border border-emerald-900 bg-emerald-950 hover:cursor-default text-xs tracking-wider'>
                Availability : <span className='text-white'>In Stock</span>
              </div>
              <p className='text-sm font-light text-slate-300 pb-2 border-b border-b-slate-700 me-10 mb-5'>For bulk orders or B2B inquiries, email us : <a href='mailto:sales@gmail.com' className='text-white'>sales@gmail.com</a></p>
              <div className='text-lg mb-2 px-0 md:px-6 lg:px-0 font-normal'>
                Description :
              </div>
              <p className='text-sm pb-5 px-0 md:px-6 lg:px-0'>This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED</p>
              <div className='text-lg mb-2 px-0 md:px-6 lg:px-0 font-normal'>
                What You'll Learn :
              </div>
              <ul className='list-item text-sm px-6 lg:px-6 md:px-6 mr-10'>
                <li className='list-decimal mb-1'>

                  How to use a flame sensor to detect fire.
                </li>
                <li className='list-decimal mb-1'>

                  How to program an Arduino to respond with a buzzer and LED when fire is detected.</li>
                <li className='list-decimal mb-1'>The basics of safety and alert systems.</li>
                <li className='list-decimal mb-1'>How sensors help in early fire warning.</li>
                <li className='list-decimal mb-1'>How to build a simple fire alarm using electronics.</li>
                <li className='list-decimal mb-1'>How to use a laser and LDR sensor to detect intrusions.</li>
              </ul>
              <br />
              <div className='text-lg mb-2 px-0 md:px-6 lg:px-0 font-normal'>
                What you get with this :
              </div>
              <div className='flex flex-wrap gap-2 mb-4 px-0 md:px-6 lg:px-0'>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Arduino uno</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Cable</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Ultrasonic Sensor</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Servo</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Wires</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Breadboard</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>pcb</span>
                <span className='py-1.5 px-5 rounded-full border border-pink-900/30 bg-pink-500/25 hover:cursor-default hover:bg-pink-500/30 hover:border-pink-900/50 text-xs tracking-wider'>Header pin</span>
              </div>
              <div className='text-lg mb-2 px-0 md:px-6 lg:px-0 font-normal'>
                Select below products to add together :
              </div>
              <div className='mb-5 overflow-auto max-h-[350px] scrollbar-div'>
                {kitAdd.map((kit) => (
                  <label key={kit.id} htmlFor={`selectKit-${kit.id}`} className={`flex items-center mb-4 gap-3 p-4 border ${checkedItems[kit.id]
                    ? "border-slate-500 bg-slate-700"
                    : "border-slate-700 bg-slate-800"
                    } cursor-pointer`} for="selectKitOne">
                    <input type='checkbox' id={`selectKit-${kit.id}`} className='h-6 w-6'
                      checked={!!checkedItems[kit.id]}
                      onChange={() => handleCheck(kit.id)} />
                    <div className='w-30 h-20'>
                      <img src='../assets/img/robot-2.png' alt='' className='w-[100%] h-20' />
                    </div>
                    <div className='flex flex-col gap-3 text-sm w-full'>
                      {kit.kitText}
                      <span className=' text-[16px] font-semibold text-pink-600'>{kit.kitPrice}	</span>
                    </div>
                  </label>
                ))}
              </div>
              <div className='text-lg mb-2 px-0 md:px-6 lg:px-0 font-normal'>
                Projects :
              </div>
              <div className='flex flex-wrap gap-2 mb-4 px-0 md:px-6 lg:px-0'>
                <span className='py-1 px-3 rounded-md border border-red-900 bg-red-950 hover:cursor-default text-xs tracking-wider'>Fire Detection System</span>
                <span className='py-1 px-3 rounded-md border border-red-900 bg-red-950 hover:cursor-default text-xs tracking-wider'>Fire Detection System</span>
              </div>
              {/* <Link to={'#'} >More Information</Link> <br /> */}
              <button className="relative z-10 px-6 py-3 mr-4 ms-0 md:ms-6 lg:ms-0 bg-black hover:bg-white hover:text-black rounded shadow-md transition-all duration-300">
                <span className="flex items-center gap-1 font-medium">
                  Add to Cart <AiOutlineShoppingCart className="text-bold" />
                </span>
              </button>
              <button onClick={() => navigate("/cart")} className="relative z-10 px-6 py-3 bg-white text-black hover:bg-black hover:text-white rounded shadow-md transition-all duration-300">
                <span className="flex items-center gap-1  font-medium">
                  Buy Kit <IoMdArrowRoundForward className=" text-bold" />
                </span>
              </button>

            </div>
          </div>
          <div className='productReview px-5 md:px-8 lg:px-16 pt-10 md:pt-10 scroll-m-10' id="productReviews">

            <div className="tabs-container">
              <div className="tab-buttons flex gap-4 mb-5">
                <button
                  className={activeTab === 'Reviews' ? 'active font-semibold px-3 py-1 border-b-2 border-b-slate-200 ' : 'px-3 border-b-2 border-transparent py-1 hover:border-b-slate-200 hover:font-semibold transition-all'}
                  onClick={() => setActiveTab('Reviews')}
                >
                  Reviews
                </button>
                <button
                  className={activeTab === 'writeReview' ? 'active font-semibold px-3 py-1 border-b-2 border-b-slate-200 ' : 'px-3 border-b-2 border-transparent py-1 hover:border-b-slate-200 hover:font-semibold transition-all'}
                  onClick={() => setActiveTab('writeReview')}
                >
                  Write Reviews
                </button>
              </div>
              <div className="tab-content">
                {
                  activeTab === 'Reviews' &&
                  <div>
                    <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-center md:justify-start mb-5 md:mb-10'>
                      <div className='px-5 mr-0 pb-5 md:pb-0 md:mr-5 w-full md:w-auto border-r-0 border-b-2 border-b-slate-800 md:border-b-0 lg:border-b-0 md:border-r-2 border-r-slate-800 flex flex-col gap-3 items-center justify-center'>
                        <span className='text-5xl font-semibold'>4.0</span>
                        <div className="flex gap-2">
                          <FaStar className='text-yellow-500' />
                          <FaStar className='text-yellow-500' />
                          <FaStar className='text-yellow-500' />
                          <FaStar className='text-yellow-500' />
                          <FaRegStar className="opacity-30" />
                        </div>
                        <span className='text-xl'>1k ratings</span>
                      </div>
                      <div className="border-b-2 border-b-slate-800 pb-5  md:border-b-0 lg:border-b-0">
                        {ratingsData.map((item, index) => {
                          const percentage = (item.count / maxCount) * 100;
                          return (
                            <div key={index} className="flex gap-3 justify-between">

                              <div className="flex gap-1 items-center justify-end">
                                {[...Array(5)].map((_, i) =>
                                  i < item.stars ? (
                                    <FaStar key={i} className="text-yellow-500" />
                                  ) : (
                                    <FaRegStar key={i} className="opacity-30" />
                                  )
                                )}
                              </div>

                              <div className="flex gap-3 items-center">
                                <div className="h-2 w-56 md:w-64 bg-gray-800 rounded relative">
                                  <div
                                    className="absolute h-2 bg-yellow-500 rounded z-10"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>

                              <span>{item.count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 h-[75vh] scrollbar-div scroll-auto overflow-y-auto">
                      {reviews.map((item, index) => (
                        <div key={index} className="px-6 py-7 mr-2 bg-slate-800 rounded">
                          <div className="reviewHeader flex items-start justify-between pb-3">
                            <div className="flex gap-3 items-center">
                              <img
                                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt=""
                                className="h-10 w-10 rounded-full"
                              />
                              <div>
                                <div className="font-medium text-md mb-1">{item.name}</div>
                                <div className="hidden gap-1 md:flex text-sm text-yellow-500">
                                  {[...Array(5)].map((_, i) =>
                                    i < item.rating ? (
                                      <FaStar key={i} className="text-yellow-500" />
                                    ) : (
                                      <FaRegStar key={i} className="opacity-50" />
                                    )
                                  )}
                                </div>
                                <div className="visible md:hidden text-sm">
                                  <FaStar className="text-yellow-500" />
                                </div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-400">{item.time}</div>
                          </div>
                          <div className="reviewContent text-sm text-slate-200">
                            {item.review}
                          </div>
                          {item.images.length > 0 && (
                            <div className="flex gap-2 flex-wrap mt-2">
                              {item.images.map((src, idx) => (
                                <img
                                  key={idx}
                                  src={src}
                                  className="w-16 h-14 object-contain"
                                  alt=""
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>

                }
                {activeTab === 'writeReview' && <div className='bg-slate-800 w-fit p-7 rounded-lg'>
                  <div className="flex gap-2 mb-4 relative">
                    {labels.map((label, index) => {
                      const starIndex = index + 1;
                      const isFilled =
                        hoveredStar >= starIndex || selectedStar >= starIndex;

                      return (
                        <div
                          key={index}
                          className="relative group"
                          onMouseEnter={() => setHoveredStar(starIndex)}
                          onMouseLeave={() => setHoveredStar(null)}
                          onClick={() => setSelectedStar(starIndex)}
                        >
                          <FaStar
                            className={`cursor-pointer text-2xl transition-colors duration-200 ${isFilled ? "text-yellow-400" : "text-slate-300"
                              }`}
                          />
                          {/* Tooltip */}
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 
                            px-2 py-1 text-xs text-white bg-black rounded opacity-0 
                            group-hover:opacity-100 transition-opacity duration-200 text-nowrap">
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <textarea className='w-[100%] md:w-[50%] outline-none p-3 mb-2 rounded text-black placeholder:text-gray-500 text-sm' rows={6} cols={100} placeholder='Enter your review...'></textarea> <br />
                  <button className='px-5 py-2 bg-blue-700 hover:bg-blue-600  rounded-md'>Submit Review</button>
                </div>}
              </div>
            </div>




          </div>
        </div>
        <div className=''><HomeBestSeller /></div>
      </section>


    }
    />
  )
}

export default ProductView
