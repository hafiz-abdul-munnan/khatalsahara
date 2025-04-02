import React from 'react'
import { NavLink } from 'react-router-dom'

const Herocomponents = () => {
  return (
    <section className='relative h-[120vh] max-sm:h-[150vh] bg-[url(/home/Join-Us-and-Grow.jpg)] bg-cover bg-center flex items-center'>
      <div className='bg-[#212d45e6] absolute inset-0'>
      </div>
      <div className='mt-[-15vh] max-sm:mt-0 z-10 text-white relative container mx-auto max-sm:px-6 max-sm:text-center px-10'>
        <h1 className='text-[#ffc03d] text-2xl font-semibold mb-2 max-sm:text-[16px]'>Khat Al Sahara Consultancies</h1>
        <h2 className='text-6xl mb-6 font-bold max-sm:text-[32px] max-sm:font-semibold max-sm:leading-10'>Turning Vision Into Reality</h2>
        <h5 className='text-[17px] font-light leading-7 lg:w-[850px] max-sm:text-[15px] max-sm:leading-5'>We specialize in helping entrepreneurs and businesses set up their operations in Dubai and the UAE. Our comprehensive services ensure a seamless and efficient process, from initial consultation to business formation. Partner with us to transform your business vision into reality in one of the world's most dynamic markets.</h5>
        <div className='mt-6 flex gap-8 items-center max-sm:justify-center max-sm:flex-col max-sm:gap-4 '>
          <NavLink className='bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d] max-sm:w-full  transition delay-150 duration-300 ease-in-out' to="/our-services">Our Services</NavLink>
          <NavLink className='hover:bg-[#ffc03d] hover:text-[#212d45] px-14 py-3 border-2 border-[#ffc03d] transition delay-150 duration-300 max-sm:w-full ease-in-out text-[#ffc03d]' to="/contact-us">Contact Us</NavLink></div>
      </div>
    </section>
  )
}

export default Herocomponents
