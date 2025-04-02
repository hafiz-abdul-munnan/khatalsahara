import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroContainer = () => {
    return (
        <section className='relative h-[80vh] max-sm:h-[100vh] max-sm:pt-[100px] bg-[url(./home/modern-business-center.8bc0ea32.jpg)] bg-cover bg-center flex items-center'>
            <div className='bg-[#212d45e6] absolute inset-0'>
            </div>
            <div className=' z-10 text-white relative container mx-auto max-sm:px-6 max-sm:text-center px-10'>
                <h1 className='text-[#ffc03d] text-2xl font-semibold mb-2 max-sm:text-[16px]'>About Us</h1>
                <h2 className='text-6xl mb-6 font-bold max-sm:text-[32px] max-sm:font-semibold max-sm:leading-10'>Your Trusted Guide to Business Success</h2>
                <h5 className='text-[17px] font-light leading-7 lg:w-[850px] max-sm:text-[15px] max-sm:leading-5'>Our expert advisors streamline the process of establishing your business in the UAE, providing comprehensive services for a smooth and successful start.</h5>
                <div className='mt-6 flex gap-8 items-center max-sm:justify-center max-sm:flex-col max-sm:gap-4 '>
                <NavLink className='bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d] max-sm:w-full  transition delay-150 duration-300 ease-in-out' to="/contact-us">Contact Us</NavLink>
            </div></div>
        </section>
    )
}

export default HeroContainer
