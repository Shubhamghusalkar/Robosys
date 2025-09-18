import React from 'react'
import UIBody from '../../../Component/UI/UIBody'

const HomeChooseUs = () => {
    return (
        <section className='chooseUs px-10 py-5  md:py-10 lg:pt-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='flex justify-center order-2 md:order-1 lg:order-1' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="600">
                    <img src="../assets/img/robot-2-2.png" alt="" className='' />
                </div>
                <div className='chooseUsContent order-1 md:order-2 lg:order-2' data-aos="fade-up" data-aos-offset="100"  data-aos-duration="800">
                    <p className='text-[color:#e91e63] text-xl mb-2 font-normal'>Why Choose Us?</p>
                    <h4 className='text-4xl text-white font-medium pb-4'>Our Best Sellers</h4>
                    <div className='my-5'>
                        <h3 className="text-xl font-semibold text-white mb-2">Innovative Design</h3>
                        <p className="text-sm text-gray-300">
                            Modern aesthetics that fit seamlessly into any interior.
                        </p>
                    </div>
                    <div className='my-5'>
                        <h3 className="text-xl font-semibold text-white mb-2">Versatile Functionality</h3>
                        <p className="text-sm text-gray-300">
                            Each robot performs multiple tasks to make your life easier.
                        </p>
                    </div>
                    <div className='my-5'>
                        <h3 className="text-xl font-semibold text-white mb-2">Durable & Long-lasting</h3>
                        <p className="text-sm text-gray-300">
                            Built with high-quality materials for extended service life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeChooseUs
