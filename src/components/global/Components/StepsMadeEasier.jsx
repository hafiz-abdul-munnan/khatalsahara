import React from 'react'
import { AiFillMessage } from "react-icons/ai";
const StepsMadeEasier = () => {
    return (
        <section className='flex flex-wrap mt-[5rem]'>
            <div className='container mx-auto px-4 text-center items-center'>
                <div className='[&>h2]:text-3xl space-y-2 [&>h2]:font-semibold'>
                    <h2>Steps Made Easier</h2>
                    <h2>With Khat Al Sahara Consultancies</h2>
                </div>

                <div className='mt-6  flex gap-10 max-sm:flex-wrap no-wrap'>
                    <div className='w-1/2 max-sm:w-full text-left flex flex-col gap-2 [&>h5]:py-2 [&>h5]:px-4 [&>h5]:first:bg-mainYellow [&>h5]:cursor-pointer'>
                        <h5>One-to-One Consultation With Business Setup Advisor</h5>
                        <h5>Selecting the Right Jurisdiction</h5>
                        <h5>Applying for Trade License</h5>
                        <h5>Initiating Visa and Emirates ID Applications</h5>
                        <h5>Opening a Corporate Bank Account</h5>
                    </div>

                    <div className='relative w-1/2 max-sm:w-full bg-[url(/home/Join-Us-and-Grow.jpg)] bg-cover bg-center text-left '>
                        <div className='absolute bg-[#212d45e6] inset-0 z-10'>
                        </div>
                        <div className='text-white relative z-20 flex flex-col p-[2rem] items-start max-sm:px-6'>
                            <h4 className='font-medium text-[18px] text-[#ffc03d] mb-3'><AiFillMessage className='inline mr-2 text-4xl' />One-to-One Consultation With Business Setup Advisor</h4>
                            <p>Arrange a face-to-face meeting or a Zoom call with one of our advisors. We recommend having a basic understanding of your business activity, the number of shareholders, your target customers, and office space requirements. Even if you need assistance, our team is ready to support you in finalizing your business plan.</p>
                        </div>
                    </div>


                </div>
            </div>

        </section >
    )
}

export default StepsMadeEasier
