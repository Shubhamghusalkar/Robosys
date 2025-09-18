import { Link } from 'react-router-dom'
import { MdRemoveRedEye } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

const Register = () => {
    return (
        <section className='login bg-neutral-950 text-white '>
            <div className='logo px-5 py-5 fixed top-0 backdrop-blur-sm w-full'>
                <Link to={'/'} className=' px-5 py-5'>
                    <span className='text-white font-medium text-3xl'>ROBOSYS</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center ">
                <div className='login-details px-10 md:px-16 lg:px-40 pt-16 flex items-center'>
                    <div className='loginCard py-14'>
                        <h4 className='text-4xl text-[color:#e91e63] font-medium mb-4'>Welcome!</h4>
                        <p className='text-white mb-5  font-light'>Register now and take the first step into innovation.</p>
                        <div className=''>
                            <div className='flex flex-col mb-5'>
                                <label for="" className=''>Name</label>
                                <input id='' type='text' name='' placeholder='Your Name' className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent' />
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label for="" className=''>Email</label>
                                <input id='' type='text' name='' placeholder='Your email address' className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent' />
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label for="" className=''>Mobile No.</label>
                                <input id='' type='text' name='' placeholder='Your Mobile No' className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent' />
                            </div>
                            <div className='flex flex-col relative mb-4'>
                                <label for="" className=''>Create Password</label>
                                <input id='' type='password' name='' placeholder='Your password' className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent' />
                                <MdRemoveRedEye className='absolute right-4 top-9 text-lg cursor-pointer' />
                            </div>
                            <hr className='my-5 border-t border-slate-900'/>
                            <button className='w-full px-4 py-2 mb-4 rounded-lg bg-zinc-900 outline-none text-slate-400 hover:text-white hover:font-semibold border hover:border-slate-800 border-transparent'>Login</button>
                            <div className='pb-4 text-center text-sm text-slate-300'> Already have an account?
                                <Link to={'/login'} className=' ps-2 underline text-[color:#e91e63]'>Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='login-img bg-black hidden items-center justify-center lg:flex md:flex md:flex-col' style={{height: '120vh'}}>
                    <h4 className='text-5xl font-medium mb-4 text-center mt-10'><div className='text-slate-100 mb-3'>Over <span className='text-[color:#e91e63]'>400+</span> kits,</div> <div className='text-slate-500'>One Goal: Innovation.</div></h4>
                    {/* <img src="../assets/img/robot-1.png" alt="" className='w-96' /> */}
                    <div className='w-96'>
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            centeredSlides={false}
                            autoplay={{
                                delay: 1500
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='flex justify-center'>
                                    <img src="../assets/img/robot-1.png" className='w-96' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center'>
                                    <img src="../assets/img/robot-2.png" className='w-96' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center'>
                                    <img src="../assets/img/robot-2-1.png" className='w-96' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center'>
                                    <img src="../assets/img/robot-2-2.png" className='w-96' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
