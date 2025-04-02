import React from 'react'
import { NavLink } from 'react-router-dom'

const content = {
    image:"/home/Join-Us-and-Grow.jpg",
    title: "Book a Free Consultation Right Now!",
    content: "Book your consultation now to receive personalized guidance and support tailored to your needs. Don't miss out on the opportunity to take the next step toward achieving your goals.",
    btn:"Book Now"
}
const CTA = () => {


    return (
        <section className='flex flex-wrap mt-[5rem]'>
            <div className={`relative max-sm:w-full bg-[url(${content.image})] bg-cover bg-center 2xl:flex 2xl:justify-center w-full`}>
                <div className='absolute bg-[#212d45e6] inset-0 z-10'>
                </div>
                <div className='text-white relative z-20 flex flex-col p-[5rem] items-center text-center 2xl:w-1/2 max-sm:px-6'>
                    <h3 className='text-3xl mb-4 font-bold text-[#ffc03d]'>{content.title}</h3>
                    <p>{content.content}</p>
                    <NavLink className='mt-10 bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d]  transition delay-150 duration-300 ease-in-out' to="/contact-us">{content.btn}</NavLink>
                </div>
            </div>
        </section>
    )
}

export default CTA
