import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

import { BsBuildingFillDown } from "react-icons/bs";
import { FaKitMedical } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { BsPassportFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaTicket } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
const ForBoxes = () => {
    return (
        <section className='flex flex-wrap item-center justify-center mt-[5rem] container mx-auto'>
            
            <div className=' container text-center mb-6 [&>h2]:text-3xl space-y-2 [&>h2]:font-semibold'>
                    <h2>Types Of Visas</h2>
                    <h2>And What Suites You The Best</h2>
                    <p>At Khat Al Sahara, we streamline the process of obtaining visas essential for Dubai business setup. Our services include the Partnership Visa and Employment Visa, designed to facilitate your business operations seamlessly.</p>
                </div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Join-Us-and-Grow.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center '>
                <div className='absolute bg-[#212d45e6] inset-0 z-10'>
                </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#ffc03d]'>Partner Visas</h4>
                    <h3 className='text-3xl mb-4 font-bold'>Inside</h3>
                    <div className='flex flex-col gap-4 text-white'>
                        <div className='flex gap-4 justify-start items-center'><BsBuildingFillDown className='min-w-[30px] text-2xl' /> <p>Inside Immigration Typing</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaCheckCircle className='min-w-[30px] text-2xl' /> <p>Change Status</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaKitMedical className='min-w-[30px] text-2xl' /> <p>Medical</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaIdCard className='min-w-[30px] text-2xl' /> <p>Emirates ID</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsPassportFill className='min-w-[30px] text-3xl' /> <p>Visa Stamping</p></div>
                    </div>
                </div>
            </div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Full-Of-Benefits.jpg)] bg-cover bg-center 2xl:flex 2xl:justify-center'><div className='absolute bg-[#ffc03de6] inset-0 z-10'>
            </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#212d45]'>Partner Visas</h4>
                    <h3 className='text-3xl mb-4 font-bold text-[#212d45]'>Outside</h3>
                    <div className='text-[#212d45] flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><BsBuildingFillDown className='min-w-[30px] text-2xl' /> <p>Outside Immigration Typing</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaKitMedical className='min-w-[30px] text-2xl' /> <p>Medical</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaIdCard className='min-w-[30px] text-2xl' /> <p>Emirates ID</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsPassportFill className='min-w-[30px] text-2xl' /> <p>Visa Stamping</p></div>
                    </div>
                </div></div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/How-Business-Formation.webp)] bg-cover bg-center 2xl:flex 2xl:justify-center'><div className='absolute bg-[#ffc03de6] inset-0 z-10'>
            </div> <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
            <h4 className='font-medium text-[18px] text-[#212d45]'>Employment Visas</h4>
                    <h3 className='text-3xl mb-4 font-bold text-[#212d45]'>Inside</h3>
                    <div className='text-[#212d45] flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><IoDocumentText className='min-w-[30px] text-2xl' /> <p>Offer Letter</p></div>
                        <div className='flex gap-4 justify-start items-center'><AiFillSafetyCertificate className='min-w-[30px] text-2xl' /> <p>Insurance</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaMoneyCheckDollar className='min-w-[30px] text-2xl' /> <p>Labour Fee</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaTicket className='min-w-[30px] text-2xl' /> <p>Inside Entry Permit</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaCheckCircle className='min-w-[30px] text-2xl' /> <p>Change Status</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaKitMedical className='min-w-[30px] text-2xl' /> <p>Medical</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaIdCard className='min-w-[30px] text-3xl' /> <p>Emirates ID</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsPassportFill className='min-w-[30px] text-3xl' /> <p>Visa Stamping</p></div>
                        <div className='flex gap-4 justify-start items-center'><AiFillMessage className='min-w-[30px] text-3xl' /> <p>Tawjeeh (Guidance)</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaUserShield className='min-w-[30px] text-2xl' /> <p>ILOE Insurance</p></div>
                    </div>
                </div></div>
            <div className='relative  w-1/2 max-sm:w-full bg-[url(/home/Always-Available-For-You.png)] bg-cover bg-center 2xl:flex 2xl:justify-center'> <div className='absolute bg-[#212d45e6] inset-0 z-10'>
            </div>
                <div className='text-white relative z-20 flex flex-col p-[3rem] items-start 2xl:w-1/2 max-sm:px-6'>
                    <h4 className='font-medium text-[18px] text-[#ffc03d]'>Employment Visas</h4>
                    <h3 className='text-3xl mb-4 font-bold'>Outside</h3>
                    <div className='text-white flex flex-col gap-4'>
                        <div className='flex gap-4 justify-start items-center'><IoDocumentText className='min-w-[30px] text-2xl' /> <p>Offer Letter</p></div>
                        <div className='flex gap-4 justify-start items-center'><AiFillSafetyCertificate className='min-w-[30px] text-2xl' /> <p>Insurance</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaMoneyCheckDollar className='min-w-[30px] text-2xl' /> <p>Labour Fee</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsBuildingFillDown className='min-w-[30px] text-2xl' /> <p>Immigration Typing</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaKitMedical className='min-w-[30px] text-2xl' /> <p>Medical</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaIdCard className='min-w-[30px] text-3xl' /> <p>Emirates ID</p></div>
                        <div className='flex gap-4 justify-start items-center'><BsPassportFill className='min-w-[30px] text-3xl' /> <p>Visa Stamping</p></div>
                        <div className='flex gap-4 justify-start items-center'><AiFillMessage className='min-w-[30px] text-3xl' /> <p>Tawjeeh (Guidance)</p></div>
                        <div className='flex gap-4 justify-start items-center'><FaUserShield className='min-w-[30px] text-3xl' /> <p>ILOE Insurance</p></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ForBoxes
