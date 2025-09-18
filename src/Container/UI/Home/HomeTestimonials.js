import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { IoIosStar } from "react-icons/io";

const HomeTestimonials = () => {

    const testimonials = [
        {
            testName: 'Shubham Ghusalkar',
            testSubName: 'CEO of Apple',
            testDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.',
            testImg: 'default.jpg'
        },
        {
            testName: 'Gourav Patil',
            testSubName: 'CEO of TCS',
            testDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.',
            testImg: 'default.jpg'
        },
        {
            testName: 'Vishwajit Pawar',
            testSubName: 'CEO of Samsung',
            testDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.',
            testImg: 'default.jpg'
        },
        {
            testName: 'Yash Shinde',
            testSubName: 'CEO of North Est',
            testDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.',
            testImg: 'default.jpg'
        },
        {
            testName: 'Uday More',
            testSubName: 'CEO of More n Sons ',
            testDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim nec tortor pulvinar maximus vel vel quam. Etiam faucibus ante lorem, et tempus elit accumsan in. Vestibulum in libero lacinia, elementum est ac, imperdiet ante.',
            testImg: 'default.jpg'
        },
    ]

    return(
        <section className="homeTestimonials px-5 lg:px-0 md:px-5 py-10 ">
                <div className='text-[color:#e91e63] text-xl mb-3 text-center font-normal' data-aos="fade-up" data-aos-offset="100" data-aos-duration="500">Testimonials</div>
                <h4 className='text-4xl text-white font-medium text-center' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">Over 100+ people trust us</h4>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            centeredSlide: 'true'
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper relative"
                >
                <div className='for-left'></div>
                    <div className='for-right'></div>
                    
                    {
                        testimonials.map((testimonial, index)=>(
                            <SwiperSlide >
                                <div className="testimonial-card p-5 rounded-md border border-1 border-slate-700" data-aos="fade-up" data-aos-offset="100"  data-aos-duration="700">
                                    <p className='text-white mb-5  font-light'>{testimonial.testDesc}</p>
                                    <div className="testimonial-footer flex items-center gap-4">
                                        <img src={`assets/img/${testimonial.testImg}`} alt="" className='w-12 rounded-full ' />   
                                        <div className="testimonial-text flex items-center justify-between w-full" >
                                            <div className="testimonial-title">
                                                <h4 className='text-white text-lg'>{testimonial.testName}</h4>
                                                <p className='text-sm text-[color:#e91e63] font-normal'>{testimonial.testSubName}</p>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
        </section>
    );
}
export default HomeTestimonials;