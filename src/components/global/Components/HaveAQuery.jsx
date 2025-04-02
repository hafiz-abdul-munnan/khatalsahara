import React from 'react'
import { NavLink } from 'react-router-dom'

const HaveAQuery = () => {
  return (
    <section className='container mx-auto max-sm:px-6 max-sm:text-center p-10 flex justify-between items-center flex-wrap max-sm:justify-center gap-6'>
        <h2 className='text-3xl font-bold text-darkBlue max-sm:text-center'>Have A Query</h2>
                <NavLink className='bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-mainYellow border-2 border-[#ffc03d] max-sm:w-full  transition delay-150 duration-300 ease-in-out' to="/contact-us">Contact Us</NavLink>
    </section>
  )
}

export default HaveAQuery
