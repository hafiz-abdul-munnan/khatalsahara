import React from 'react'
import { FaIndustry } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BiSolidTreeAlt } from "react-icons/bi";

const DubaiMainlandLicenses = () => {
    return (
        <section className=' mb-10 p-10 pb-16 bg-mainYellow bg-[url(./home/Full-Of-Benefits.jpg)] bg-cover relative'>
            <div className='h-full w-full bg-mainYellow z-10 inset-0 opacity-[0.85] absolute'>
            </div>
            <div className='container mx-auto text-center z-20 relative'>
                <h4 className='font-semibold text-lg'>Dubai Mainland Licenses</h4>
                <h2 className='text-3xl font-semibold text-mainBlue mt-2 mb-4'>For All Types of Businesses</h2>
                <div className='flex gap-10 w-full justify-between max-lg:flex-wrap'>

                    <div className='group overflow-y-hidden w-full  bg-[url(./home/industry-dubaiMainland-1.jpg)] h-[350px] bg-cover relative max-lg:w-[47%] max-sm:w-full'>
                        <div className='bg-mainBlue absolute inset-0 opacity-85'></div>

                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-10 text-mainYellow'>
                            <FaIndustry className='size-10' />
                            <h4 className='text-lg font-semibold'>Industrial License</h4>
                        </div>
                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-20 text-white bg-mainBlue top-[100%] group-hover:top-[0] transotion-transform duration-500 p-6'>
                        An Industrial License in Dubai Mainland allows businesses to engage in manufacturing and industrial activities. This includes the production, transformation, and manufacturing of goods and commodities.
                        </div>
                    </div>

                    <div className='group overflow-y-hidden w-full  bg-[url(./home/industry-dubaiMainland-1.jpg)] h-[350px] bg-cover relative max-lg:w-[47%] max-sm:w-full'>
                        <div className='bg-mainBlue absolute inset-0 opacity-85'></div>

                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-10 text-mainYellow'>
                            <MdShoppingBag className='size-10' />
                            <h4 className='text-lg font-semibold'>Commercial License</h4>
                        </div>
                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-20 text-white bg-mainBlue top-[100%] group-hover:top-[0] transotion-transform duration-500 p-6'>
                        A Commercial License is essential for businesses involved in trading activities. It covers general trading, retail, and wholesale businesses, enabling companies to buy and sell goods.
                        </div>
                    </div>

                    <div className='group overflow-y-hidden w-full bg-[url(./home/industry-dubaiMainland-1.jpg)] h-[350px] bg-cover relative max-lg:w-[47%] max-sm:w-full'>
                        <div className='bg-mainBlue absolute inset-0 opacity-85'></div>

                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-10 text-mainYellow'>
                            <FaUserTie className='size-10' />
                            <h4 className='text-lg font-semibold'>Professional License</h4>
                        </div>
                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-20 text-white bg-mainBlue top-[100%] group-hover:top-[0] transotion-transform duration-500 p-6'>
                        A Professional License is ideal for individuals and companies offering professional services. This includes consultants, artisans, and craftsmen who provide specialized expertise.
                        </div>
                    </div>

                    <div className='group overflow-y-hidden w-full bg-[url(./home/industry-dubaiMainland-1.jpg)] h-[350px] bg-cover relative max-lg:w-[47%] max-sm:w-full'>
                        <div className='bg-mainBlue absolute inset-0 opacity-85'></div>

                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6 absolute z-10 text-mainYellow'>
                            <BiSolidTreeAlt className='size-10' />
                            <h4 className='text-lg font-semibold'>Tourism License</h4>
                        </div>
                        <div className='flex justify-center items-center w-[100%] h-[100%] flex-col gap-6  absolute z-20 text-white bg-mainBlue top-[100%] group-hover:top-[0] transotion-transform duration-500 p-6'>
                        A Tourism License is necessary for businesses operating in the tourism sector. It covers travel agencies, tour operators, hotels, and other tourism-related services.
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DubaiMainlandLicenses
