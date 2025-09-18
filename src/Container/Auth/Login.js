import { Link } from 'react-router-dom'
import { MdRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import useApiCallHooks from '../../Hooks/useApiCallHooks';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [response, loading, error, callApi, statusCode] = useApiCallHooks();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onSubmit = () => {
        callApi("post", "login", data);
    }
    useEffect(() => {
        if (response && response?.data?.token) {
            localStorage.setItem("udata", btoa(JSON.stringify(response.data)));
            navigate("/dashboard");
        }
    }, [response, navigate]);
    return (
        <section className='login bg-neutral-950 text-white '>
            <div className='logo px-5 py-5 fixed top-0 backdrop-blur-sm'>
                <Link to={'/'} className=' px-5 py-5'>
                    <span className='text-white font-medium text-3xl'>ROBOSYS</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center pt-28 md:pt-0 lg:pt-0">
                <div className='login-details px-10 md:px-16 lg:px-40 pt-16'>
                    <div className='loginCard '>
                        <h4 className='text-4xl text-[color:#e91e63] font-medium mb-4'>Welcome!</h4>
                        <p className='text-white mb-5  font-light'>Log in to access your dashboard and manage your account.</p>
                        <div className=''>
                            <div className='flex flex-col mb-5'>
                                <label for="" className=''>Email</label>
                                <input id='' type='text' name='' placeholder='Your email address' onChange={(e) => setData({ ...data, email: e.target.value })} className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent' />
                            </div>
                            <div className='flex flex-col mb-2 relative'>
                                <label>Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Your password'
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className='px-4 py-2 rounded-lg bg-zinc-900 placeholder:text-slate-600 text-white outline-none border focus:border-slate-800 border-transparent'
                                />

                                {showPassword ? (
                                    <MdOutlineVisibilityOff
                                        className='absolute right-4 top-9 text-lg cursor-pointer'
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <MdRemoveRedEye
                                        className='absolute right-4 top-9 text-lg cursor-pointer'
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <div className=' text-right '>
                                <Link to={'#'} className='text-sm text-[color:#e91e63] underline'>Forgot Password?</Link>
                            </div>
                            <hr className='my-5 border-t border-slate-900' />
                            <button onClick={onSubmit} className='w-full px-4 py-2 mb-4 rounded-lg bg-zinc-900 outline-none text-slate-400 hover:text-white hover:font-semibold border hover:border-slate-800 border-transparent'>Login</button>
                            <div className='pb-4 text-center text-sm text-slate-300'> Don't have an account?
                                <Link to={'/register'} className=' ps-2 underline text-[color:#e91e63]'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='login-img bg-black hidden items-center justify-center lg:flex md:flex md:flex-col' style={{ height: '100vh' }}>
                    <h4 className='text-5xl font-medium mb-4 text-center mt-10'><div className='text-slate-100 mb-3'>Over <span className='text-[color:#e91e63]'>400+</span> kits,</div> <div className='text-slate-500'>One Goal: Innovation.</div></h4>
                    {/* <img src="../assets/img/robot-2.png" className='w-20 h-64' /> */}
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

export default Login
