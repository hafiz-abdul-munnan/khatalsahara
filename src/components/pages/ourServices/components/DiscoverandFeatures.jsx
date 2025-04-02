import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
const DiscoverandFeatures = () => {
    return (
        <section className='flex flex-wrap mt-[5rem]'>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Join-Us-and-Grow.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center '>
                <div className='absolute bg-[#212d45e6] inset-0 z-10'>
                </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-[70%] max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#ffc03d]'>Discover The Best Services</h4>
                    <h3 className='text-3xl mb-4 font-bold'>Enhancing Services with Khat-al-Sahara</h3>
                    <p>Our services include a free consultation with our experts, assistance in choosing the ideal business location, streamlined license application, efficient visa and Emirates ID processing, and comprehensive business banking support to ensure your venture's success.</p>
                    <NavLink className='mt-10 bg-[#ffc03d] text-[#212d45] px-14 py-3 hover:bg-transparent hover:text-[#ffc03d] border-2 border-[#ffc03d]  transition delay-150 duration-300 ease-in-out' to="/contact-us">Book Consultation</NavLink>
                </div>
            </div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Full-Of-Benefits.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center'><div className='absolute bg-[#ffc03de6] inset-0 z-10'>
            </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-[70%] max-sm:px-6'>
                    <h3 className='text-3xl mb-4 font-bold text-[#212d45]'>Get the Following Features</h3>
                    <div className='text-[#212d45] flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><FaUser className='min-w-[30px] text-2xl' /> <p>Personal Consultation with a Business Setup Expert</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaMapMarkedAlt className='min-w-[30px] text-2xl' /> <p>Choosing the Best Business Location</p></div>
                        <div className='flex gap-4 justify-start items-center'><IoDocument className='min-w-[30px] text-2xl' /> <p>Help with Trade License Applications</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaAddressCard className='min-w-[30px] text-2xl' /> <p>Assistance with Visa and Emirates ID ProcessesAssistance with Visa and Emirates ID Processes</p></div>
                        <div className='flex gap-4 justify-start items-center'><BiSolidBank className='min-w-[30px] text-3xl' /> <p>Setting Up a Business Bank Account</p></div>
                    </div>
                </div></div>


        </section>
    )
}

export default DiscoverandFeatures
