import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const ForthBoxesComponents = () => {
    return (
        <section className='flex flex-wrap mt-[5rem]'>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Join-Us-and-Grow.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center '>
                <div className='absolute bg-[#212d45e6] inset-0 z-10'>
                </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#ffc03d]'>Join Us and Grow</h4>
                    <h3 className='text-3xl mb-4 font-bold'>Empower Your Business with Our Expertise</h3>
                    <p>Easily manage your payments, services and communication with us all in one account. The best part here is that it's totally free of cost and there are no hidden charges!</p>
                    <NavLink className='mt-10 bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d]  transition delay-150 duration-300 ease-in-out' to="/contact-us">Hire Us</NavLink>
                </div>
            </div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Full-Of-Benefits.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center'><div className='absolute bg-[#ffc03de6] inset-0 z-10'>
            </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#212d45]'>Full Of Benefits                    </h4>
                    <h3 className='text-3xl mb-4 font-bold text-[#212d45]'>Get Access to the Following
                    </h3>
                    <div className='text-[#212d45] flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><FaUser className='min-w-[30px] text-2xl' /> <p>Comfortably manage your personal info</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaCreditCard className='min-w-[30px] text-2xl' /> <p>Easily pay online for our services</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaUsers className='min-w-[30px] text-2xl' /> <p>Get premium support from our team</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaBox className='min-w-[30px] text-2xl' /> <p>Manage all your company opening information at one place.</p></div>
                        <div className='flex gap-4 justify-start items-center'><IoDocumentText className='min-w-[30px] text-3xl' /> <p>Get the latest news and advancements about Dubai' Business</p></div>
                    </div>
                </div></div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/How-Business-Formation.webp)] bg-cover bg-center 2xl:flex 2xl:justify-center'><div className='absolute bg-[#ffc03de6] inset-0 z-10'>
            </div> <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h3 className='text-3xl mb-4 font-bold text-[#212d45]'>How Business Formation Will Be Done By Us
                    </h3>
                    <div className='text-[#212d45] flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><AiFillMessage className='min-w-[30px] text-2xl' /> <p>Book a Free Consultation with the Our Experts</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaMapLocationDot className='min-w-[30px] text-2xl' /> <p>Choose the Ideal Business Location</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaUsers className='min-w-[30px] text-2xl' /> <p>License Application</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaAddressCard className='min-w-[30px] text-2xl' /> <p>Visa and Emirates ID Processing</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsBank2 className='min-w-[30px] text-3xl' /> <p>Business Banking Assistance</p></div>
                    </div>
                </div></div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Always-Available-For-You.png)] bg-cover bg-center 2xl:flex 2xl:justify-center'> <div className='absolute bg-[#212d45e6] inset-0 z-10'>
            </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#ffc03d]'>Always Available For You
                    </h4>
                    <h3 className='text-3xl mb-4 font-bold'>We Provide Completely Versatile Services Specially Designed For Your Needs</h3>
                    <NavLink className='mt-10 bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d]  transition delay-150 duration-300 ease-in-out' to="/our-services">See All Services</NavLink>
                </div>
            </div>

        </section>
    )
}

export default ForthBoxesComponents
